import seed from "@/data/shopping-list.json";
import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

export const shoppingItemSchema = z.object({
  id: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(120),
  checked: z.boolean(),
});

export const shoppingCategorySchema = z.object({
  id: z.string().min(1).max(100),
  title: z.string().trim().min(1).max(80),
  items: z.array(shoppingItemSchema).max(500),
});

export const shoppingListSchema = z.object({
  categories: z.array(shoppingCategorySchema).max(100),
});

export type ShoppingItem = z.infer<typeof shoppingItemSchema>;
export type ShoppingCategory = z.infer<typeof shoppingCategorySchema>;
export type ShoppingList = z.infer<typeof shoppingListSchema>;

const FILE_PATH = path.join(process.cwd(), "data", "shopping-list.json");
const REDIS_KEY = "services:shopping-list";

export class StorageNotConfiguredError extends Error {
  constructor() {
    super(
      "Storage not configured. Connect an Upstash Redis store to this project (KV_REST_API_URL / KV_REST_API_TOKEN).",
    );
  }
}

// Redis is used when its env vars exist (production). Otherwise the local
// JSON file is used (development), since Vercel's filesystem is read-only.
function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? new Redis({ url, token }) : null;
}

export async function readShoppingList(): Promise<ShoppingList> {
  const redis = getRedis();
  if (redis) {
    const stored = await redis.get(REDIS_KEY);
    const parsed = shoppingListSchema.safeParse(stored);
    // First run: nothing stored yet, so start from the bundled seed.
    return parsed.success ? parsed.data : shoppingListSchema.parse(seed);
  }
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    return shoppingListSchema.parse(JSON.parse(raw));
  } catch {
    return shoppingListSchema.parse(seed);
  }
}

export async function writeShoppingList(list: ShoppingList): Promise<void> {
  const redis = getRedis();
  if (redis) {
    await redis.set(REDIS_KEY, list);
    return;
  }
  if (process.env.VERCEL) throw new StorageNotConfiguredError();

  // Write to a temp file first so a crash never leaves a half-written JSON.
  const tmp = `${FILE_PATH}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(list, null, 2), "utf-8");
  await fs.rename(tmp, FILE_PATH);
}
