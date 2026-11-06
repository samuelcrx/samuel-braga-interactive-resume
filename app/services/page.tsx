import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Samuel Braga",
  description: "Pequenas ferramentas utilitárias.",
};

const services = [
  {
    title: "Lista de compras",
    description:
      "Lista organizada por categorias, com itens marcáveis e opção de adicionar novos.",
    href: "/services/shopping-list",
    icon: ShoppingCart,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 md:pt-36 pb-24 min-h-screen bg-background-secondary">
      <div className="container">
        <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
          // Services
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
          Ferramentas do dia a dia
        </h1>
        <p className="text-foreground-muted max-w-2xl mb-12">
          Pequenos utilitários que construí para uso pessoal.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-6 rounded-lg bg-background-card border border-border hover:border-primary/50 transition-colors"
            >
              <service.icon className="text-primary mb-4" size={28} />
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h2>
              <p className="text-sm text-foreground-muted mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Abrir
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
