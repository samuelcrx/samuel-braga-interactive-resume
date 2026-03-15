import { cn } from "@/lib/utils";

export const Pill = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card/80 backdrop-blur-sm border border-border text-sm text-foreground-muted",
        className
      )}
    >
      <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-glow shadow-primary/30" />
      {children}
    </div>
  );
};
