"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "samuel.devsilva@gmail.com",
    href: "mailto:samuel.devsilva@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/samuelbraga",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://linkedin.com/in/samuelbraga",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Aguaí, São Paulo, Brazil",
    href: null,
  },
];

export const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background-secondary relative">
      <div className="container">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <span
            className={cn(
              "text-primary font-mono text-sm tracking-wider mb-4 block transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            // Get in Touch
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {"Let's build something great together"}
          </h2>
          <p
            className={cn(
              "text-foreground-muted max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {"I'm always interested in discussing new opportunities, technical challenges, or potential collaborations. Feel free to reach out."}
          </p>

          <div
            className={cn(
              "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {contactLinks.map((link) => (
              <div
                key={link.label}
                className="p-6 rounded-lg bg-background-card border border-border hover:border-border-light transition-all duration-300 group"
              >
                <link.icon className="w-6 h-6 text-primary mb-4 mx-auto" />
                <h3 className="text-sm font-medium text-foreground mb-1">{link.label}</h3>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-muted hover:text-primary transition-colors break-all"
                  >
                    {link.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground-muted">{link.value}</span>
                )}
              </div>
            ))}
          </div>

          <a
            href="mailto:samuel.devsilva@gmail.com"
            className={cn(
              "inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-glow shadow-primary/20 hover:shadow-primary/30",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};
