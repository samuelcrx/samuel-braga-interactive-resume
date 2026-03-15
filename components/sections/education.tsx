"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Award, GraduationCap, Languages } from "lucide-react";

const education = [
  {
    degree: "Postgraduate in Database Engineering",
    institution: "Wyden",
    period: "2026",
    description: "Database architecture, optimization, and data engineering.",
  },
  {
    degree: "Postgraduate in High-Performance Team Management",
    institution: "Estácio",
    period: "2025",
    description: "Leadership, team dynamics, and organizational management.",
  },
  {
    degree: "Postgraduate in Cloud Computing Architecture",
    institution: "Estácio",
    period: "2023 - 2024",
    description: "Cloud architecture, project design, AWS, and Azure.",
  },
  {
    degree: "Postgraduate in Mobile Development",
    institution: "Faculdade Única",
    period: "2022",
    description: "Mobile development with React Native and native platforms.",
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: "UNIFAE",
    period: "2017 - 2020",
    description: "Software engineering fundamentals and best practices.",
  },
];

const certifications = [
  "Scrum Foundation Professional Certificate",
  "Amazon Bedrock Workshop",
  "MongoDB Day",
];

const languages = [
  { language: "Portuguese", level: "Native" },
  { language: "English", level: "Professional Working" },
  { language: "Spanish", level: "Limited Working" },
];

export const EducationSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container">
        <div ref={ref}>
          <span
            className={cn(
              "text-primary font-mono text-sm tracking-wider mb-4 block transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            // Education & Credentials
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-semibold text-foreground mb-12 text-balance transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Academic foundation & certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div
              className={cn(
                "p-6 rounded-lg bg-background-card border border-border transition-all duration-700 delay-200",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {education.map((edu) => (
                  <div key={edu.degree} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-medium text-foreground text-sm mb-1">{edu.degree}</h4>
                    <p className="text-xs text-foreground-muted mb-1">{edu.institution}</p>
                    <p className="text-xs font-mono text-primary">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div
              className={cn(
                "p-6 rounded-lg bg-background-card border border-border transition-all duration-700 delay-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-foreground-muted">
                    <span className="text-primary mt-0.5">{">"}</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div
              className={cn(
                "p-6 rounded-lg bg-background-card border border-border transition-all duration-700 delay-400",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Languages</h3>
              </div>

              <ul className="space-y-4">
                {languages.map((lang) => (
                  <li key={lang.language} className="flex items-center justify-between">
                    <span className="text-foreground">{lang.language}</span>
                    <span className="text-sm text-foreground-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
