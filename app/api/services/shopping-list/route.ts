import { NextResponse } from "next/server";
import {
  readShoppingList,
  shoppingListSchema,
  writeShoppingList,
} from "@/lib/shopping-list";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await readShoppingList());
  } catch {
    return NextResponse.json({ error: "Failed to read list" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = shoppingListSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid list" }, { status: 400 });
  }

  try {
    await writeShoppingList(parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save list" }, { status: 500 });
  }
}
