"use client";

import { useState, useEffect } from "react";
import { GL } from "./gl";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-svh flex flex-col justify-center">
      <GL hovering={hovering} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card/80 backdrop-blur-sm border border-border mb-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-foreground-muted">
              Available for new opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 tracking-tight transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Samuel Braga
          </h1>

          {/* Title */}
          <p
            className={cn(
              "text-xl sm:text-2xl md:text-3xl text-primary font-medium mb-6 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Tech Lead & Specialist Software Engineer
          </p>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-foreground-muted max-w-2xl leading-relaxed mb-10 text-balance transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Building scalable digital products across front-end, back-end, cloud, 
            and data layers. Hands-on technical leader focused on architecture, 
            code quality, and engineering excellence.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-wrap items-center gap-4 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-transparent text-foreground border border-border rounded-lg hover:border-border-light hover:bg-background-card transition-all duration-300"
            >
              <FileText size={18} />
              Resume
            </a>
            <a
              href="https://github.com/samuelcrx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center justify-center w-12 h-12 text-foreground-muted border border-border rounded-lg hover:border-border-light hover:text-foreground hover:bg-background-card transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-s-braga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center justify-center w-12 h-12 text-foreground-muted border border-border rounded-lg hover:border-border-light hover:text-foreground hover:bg-background-card transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <span className="text-xs text-foreground-muted font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-foreground-muted animate-bounce" />
      </div>
    </section>
  );
}
