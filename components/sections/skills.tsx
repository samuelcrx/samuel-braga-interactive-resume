"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Front-end",
    skills: ["React", "Next.js", "React Native", "Vue.js", "Angular", "HTML/CSS"],
  },
  {
    title: "Back-end & APIs",
    skills: ["Node.js", "NestJS", "REST APIs", "GraphQL", "JWT", "OAuth", "WebSockets", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins", "GitLab CI/CD"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "MariaDB", "DynamoDB", "SQLite", "Firebase"],
  },
  {
    title: "Practices",
    skills: ["Clean Architecture", "Design Patterns", "SOLID", "TDD", "Code Review", "Technical Leadership", "Agile"],
  },
];

export const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-background-secondary relative">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            // Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Engineering expertise across the stack
          </h2>
          <p className="text-foreground-muted max-w-2xl mb-12">
            Deep technical proficiency in modern technologies, with a focus on 
            building scalable, maintainable systems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={cn(
                  "p-6 rounded-lg bg-background-card border border-border hover:border-border-light transition-all duration-300",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-background rounded-md text-foreground-muted border border-border hover:border-primary/50 hover:text-foreground transition-colors"
                    >
                      {skill}
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
