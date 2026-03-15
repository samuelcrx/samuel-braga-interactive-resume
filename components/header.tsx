import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <header className="flex items-center justify-between container h-16 md:h-20">
        <Link href="/" className="font-mono text-lg font-semibold text-foreground hover:text-primary transition-colors">
          {"<SB />"}
        </Link>
        <nav className="flex max-lg:hidden items-center justify-center gap-x-8">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-200"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link 
          className="max-lg:hidden text-sm font-medium px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 border border-primary/20" 
          href="/#contact"
        >
          Get in Touch
        </Link>
        <MobileMenu />
      </header>
    </div>
  );
};
