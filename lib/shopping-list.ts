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

export async function readShoppingList(): Promise<ShoppingList> {
  const raw = await fs.readFile(FILE_PATH, "utf-8");
  return shoppingListSchema.parse(JSON.parse(raw));
}

export async function writeShoppingList(list: ShoppingList): Promise<void> {
  // Write to a temp file first so a crash never leaves a half-written JSON.
  const tmp = `${FILE_PATH}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(list, null, 2), "utf-8");
  await fs.rename(tmp, FILE_PATH);
}
