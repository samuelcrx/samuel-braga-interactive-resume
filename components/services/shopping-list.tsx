"use client";

import type { ShoppingList } from "@/lib/shopping-list";
import { cn } from "@/lib/utils";
import { Check, Pencil, Plus, RotateCcw, Trash2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type SaveStatus = "idle" | "saving" | "saved" | "error";

const newId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

interface Props {
  initialList: ShoppingList;
}

export const ShoppingListView = ({ initialList }: Props) => {
  const [list, setList] = useState<ShoppingList>(initialList);
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [editMode, setEditMode] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latest = useRef(list);

  const save = useCallback(async () => {
    setStatus("saving");
    try {
      const res = await fetch("/api/services/shopping-list", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(latest.current),
      });
      if (!res.ok) throw new Error("save failed");
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }, []);

  const update = useCallback(
    (updater: (prev: ShoppingList) => ShoppingList) => {
      const next = updater(latest.current);
      latest.current = next;
      setList(next);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(save, 350);
    },
    [save]
  );

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const total = list.categories.reduce((n, c) => n + c.items.length, 0);
  const done = list.categories.reduce(
    (n, c) => n + c.items.filter((i) => i.checked).length,
    0
  );
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  const toggleItem = (catId: string, itemId: string) =>
    update((prev) => ({
      categories: prev.categories.map((c) =>
        c.id !== catId
          ? c
          : {
              ...c,
              items: c.items.map((i) =>
                i.id === itemId ? { ...i, checked: !i.checked } : i
              ),
            }
      ),
    }));

  const addItem = (catId: string) => {
    const name = (drafts[catId] ?? "").trim();
    if (!name) return;
    update((prev) => ({
      categories: prev.categories.map((c) =>
        c.id !== catId
          ? c
          : { ...c, items: [...c.items, { id: newId(), name, checked: false }] }
      ),
    }));
    setDrafts((d) => ({ ...d, [catId]: "" }));
  };

  const removeItem = (catId: string, itemId: string) =>
    update((prev) => ({
      categories: prev.categories.map((c) =>
        c.id !== catId
          ? c
          : { ...c, items: c.items.filter((i) => i.id !== itemId) }
      ),
    }));

  const addCategory = () => {
    const title = newCategory.trim();
    if (!title) return;
    update((prev) => ({
      categories: [...prev.categories, { id: newId(), title, items: [] }],
    }));
    setNewCategory("");
  };

  const removeCategory = (catId: string) => {
    const cat = list.categories.find((c) => c.id === catId);
    if (!cat) return;
    if (
      cat.items.length > 0 &&
      !window.confirm(`Remover "${cat.title}" e seus ${cat.items.length} itens?`)
    ) {
      return;
    }
    update((prev) => ({
      categories: prev.categories.filter((c) => c.id !== catId),
    }));
  };

  const resetChecks = () => {
    if (done === 0) return;
    if (!window.confirm("Desmarcar todos os itens?")) return;
    update((prev) => ({
      categories: prev.categories.map((c) => ({
        ...c,
        items: c.items.map((i) => ({ ...i, checked: false })),
      })),
    }));
  };

  const statusLabel: Record<SaveStatus, string> = {
    idle: "",
    saving: "Salvando...",
    saved: "Salvo",
    error: "Erro ao salvar",
  };

  return (
    <div>
      {/* Progress */}
      <div className="sticky top-16 md:top-20 z-20 -mx-4 px-4 md:mx-0 md:px-0 py-4 bg-background/90 backdrop-blur-md border-b border-border/50 md:border md:rounded-lg md:px-5 mb-8">
        <div className="flex items-center justify-between gap-4 mb-2">
          <p className="text-sm text-foreground">
            <span className="font-mono text-primary">{done}</span>
            <span className="text-foreground-muted"> de {total} itens</span>
          </p>
          <span
            aria-live="polite"
            className={cn(
              "text-xs font-mono",
              status === "error" ? "text-red-400" : "text-foreground-muted"
            )}
          >
            {statusLabel[status]}
          </span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progresso da lista"
          className="h-2 rounded-full bg-background-card overflow-hidden"
        >
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          type="button"
          onClick={() => setEditMode((v) => !v)}
          aria-pressed={editMode}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border transition-colors",
            editMode
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
          )}
        >
          {editMode ? <Check size={16} /> : <Pencil size={16} />}
          {editMode ? "Concluir edição" : "Editar lista"}
        </button>
        <button
          type="button"
          onClick={resetChecks}
          disabled={done === 0}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border border-border text-foreground-muted hover:text-foreground hover:border-border-light transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          <RotateCcw size={16} />
          Desmarcar tudo
        </button>
      </div>

      {status === "error" && (
        <div className="mb-6 flex items-center justify-between gap-4 rounded-md border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          <span>Não foi possível salvar. Suas alterações ainda estão na tela.</span>
          <button
            type="button"
            onClick={save}
            className="font-medium underline underline-offset-2"
          >
            Tentar de novo
          </button>
        </div>
      )}

      {/* Categories */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {list.categories.map((category) => {
          const catDone = category.items.filter((i) => i.checked).length;
          return (
            <section
              key={category.id}
              className="p-5 md:p-6 rounded-lg bg-background-card border border-border"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {category.title}
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-xs text-foreground-muted">
                    {catDone}/{category.items.length}
                  </span>
                  {editMode && (
                    <button
                      type="button"
                      onClick={() => removeCategory(category.id)}
                      aria-label={`Remover categoria ${category.title}`}
                      className="p-1.5 rounded-md text-foreground-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>

              {category.items.length === 0 && (
                <p className="text-sm text-foreground-muted mb-4">
                  Nenhum item ainda.
                </p>
              )}

              <ul className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={item.checked}
                      onClick={() => toggleItem(category.id, item.id)}
                      className={cn(
                        "flex-1 min-h-12 flex items-center gap-3 px-3 py-2 rounded-md border text-left transition-colors",
                        item.checked
                          ? "bg-primary/10 border-primary/30"
                          : "bg-background border-border hover:border-primary/50"
                      )}
                    >
                      <span
                        className={cn(
                          "w-6 h-6 shrink-0 rounded-md border flex items-center justify-center transition-colors",
                          item.checked
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-border-light"
                        )}
                      >
                        {item.checked && <Check size={16} strokeWidth={3} />}
                      </span>
                      <span
                        className={cn(
                          "text-sm md:text-base transition-colors",
                          item.checked
                            ? "line-through text-foreground-muted"
                            : "text-foreground"
                        )}
                      >
                        {item.name}
                      </span>
                    </button>
                    {editMode && (
                      <button
                        type="button"
                        onClick={() => removeItem(category.id, item.id)}
                        aria-label={`Remover ${item.name}`}
                        className="p-2.5 rounded-md text-foreground-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {/* Add item */}
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  addItem(category.id);
                }}
              >
                <input
                  type="text"
                  value={drafts[category.id] ?? ""}
                  onChange={(e) =>
                    setDrafts((d) => ({ ...d, [category.id]: e.target.value }))
                  }
                  maxLength={120}
                  placeholder="Adicionar item..."
                  aria-label={`Adicionar item em ${category.title}`}
                  className="flex-1 min-w-0 h-11 px-3 text-base sm:text-sm rounded-md bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Adicionar item"
                  className="h-11 w-11 shrink-0 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </form>
            </section>
          );
        })}
      </div>

      {/* Add category */}
      <form
        className="mt-8 p-5 md:p-6 rounded-lg border border-dashed border-border-light flex flex-col sm:flex-row gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          addCategory();
        }}
      >
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          maxLength={80}
          placeholder="Nova categoria (ex: Padaria, Bebidas...)"
          aria-label="Nome da nova categoria"
          className="w-full sm:flex-1 h-12 px-4 text-base sm:text-sm rounded-md bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="h-12 sm:h-11 inline-flex items-center justify-center gap-2 px-5 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
        >
          <Plus size={16} />
          Adicionar categoria
        </button>
      </form>
    </div>
  );
};
