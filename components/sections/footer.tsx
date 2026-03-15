import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-foreground-muted">
              {"<SB />"} Samuel Braga
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/samuelbraga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/samuelbraga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:samuel.devsilva@gmail.com"
              aria-label="Send Email"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-foreground-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
