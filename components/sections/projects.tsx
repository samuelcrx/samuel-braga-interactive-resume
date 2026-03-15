"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pet Sponsorship Social Platform",
    description:
      "Designed and built a social-style sponsorship platform for dogs and cats, enabling donors to sponsor animals, make contributions, and follow their care journey through posts, images, and status updates.",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
    category: "Full-Stack",
    highlights: [
      "Created profile management flows for NGOs and caretakers to manage animal pages and publish updates",
      "Implemented multi-factor authentication, Google and Apple sign-in, and email/password login",
      "Conducted market research and helped define the product roadmap",
    ],
  },
  {
    title: "Service Order Management Platform",
    description:
      "Built a service order management platform with operational dashboards for tracking open, closed, monthly, yearly, and historical service orders.",
    technologies: ["React", "Node.js", "NestJS", "PostgreSQL"],
    category: "Enterprise",
    highlights: [
      "Developed workflows to create, monitor, and close service orders with signature requirements",
      "Implemented image attachment validation for operational proof and auditability",
      "Delivered as independent project supporting local government IT departments",
    ],
  },
  {
    title: "Financial and Payroll Calculators",
    description:
      "Developed a single-page application offering multiple calculators including net salary, severance, 13th salary, percentage, profit, loss, and personal planning calculations.",
    technologies: ["React", "TypeScript"],
    category: "Web App",
    highlights: [
      "Designed for simplicity and fast performance for end users",
      "Integrated AI-assisted rule retrieval for frequently changing labor regulations",
      "Focused on usability, responsiveness, and maintainability",
    ],
  },
  {
    title: "Real-time Communication Integrations",
    description:
      "Integrated external platforms including WhatsApp APIs, Telegram bots, and payment gateways into web applications with maintainable, well-structured solutions.",
    technologies: ["Node.js", "NestJS", "WebSockets", "AWS", "REST APIs"],
    category: "Integrations",
    highlights: [
      "Built real-time messaging features with Socket.io",
      "Implemented payment gateway integrations",
      "Delivered offline-capable mobile features with React Native",
    ],
  },
];

export const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 md:py-32 bg-background-secondary relative">
      <div className="container">
        <div ref={ref}>
          <span
            className={cn(
              "text-primary font-mono text-sm tracking-wider mb-4 block transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            // Selected Projects
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Building systems that scale
          </h2>
          <p
            className={cn(
              "text-foreground-muted max-w-2xl mb-12 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            A selection of technical projects showcasing expertise in architecture, 
            scalability, and full-stack implementation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "group p-6 md:p-8 rounded-lg bg-background-card border border-border hover:border-primary/30 transition-all duration-300",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      aria-label="View source code"
                      className="text-foreground-muted hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                    </button>
                    <button
                      aria-label="View live project"
                      className="text-foreground-muted hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-foreground-muted"
                      >
                        <span className="text-primary mt-0.5">{">"}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-background rounded text-foreground-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
