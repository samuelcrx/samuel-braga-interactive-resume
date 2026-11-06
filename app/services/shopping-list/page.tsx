import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ShoppingListView } from "@/components/services/shopping-list";
import { readShoppingList } from "@/lib/shopping-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lista de Compras | Services",
  description: "Lista de compras com categorias, salva em JSON.",
};

export default async function ShoppingListPage() {
  const list = await readShoppingList();

  return (
    <main className="pt-28 md:pt-36 pb-24 min-h-screen bg-background-secondary">
      <div className="container">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Services
        </Link>
        <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
          // Services / Shopping List
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
          Lista de compras
        </h1>
        <p className="text-foreground-muted max-w-2xl mb-10">
          Toque em um item para marcar. Use &quot;Editar lista&quot; para remover
          itens ou categorias e os campos de texto para adicionar novos.
        </p>
        <ShoppingListView initialList={list} />
      </div>
    </main>
  );
}
