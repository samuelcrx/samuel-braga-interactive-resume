"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Tech Lead",
    company: "YDUQS",
    location: "Rio de Janeiro, Brazil",
    period: "Sep 2025 - Present",
    description:
      "Leading technical initiatives across the Sirius ecosystem, defining solutions, evolving architecture, and guiding teams working on mission-critical education products.",
    highlights: [
      "Combines technical leadership with hands-on engineering, implementing solutions, reviewing code, and solving complex technical challenges",
      "Defines architectural standards, engineering best practices, technical priorities, and delivery alignment with a focus on scalability, security, and software quality",
      "Connects front-end, back-end, cloud, and data initiatives to support system evolution and long-term maintainability",
    ],
    technologies: ["React", "Next.js", "Node.js", "NestJS", "AWS", "Azure", "MongoDB", "PostgreSQL"],
  },
  {
    role: "Specialist Software Engineer",
    company: "YDUQS",
    location: "Rio de Janeiro, Brazil",
    period: "Apr 2025 - Sep 2025",
    description:
      "Evolved platform architecture and led high-impact technical initiatives that improved software quality, maintainability, and reliability.",
    highlights: [
      "Partnered with multiple teams to define solutions, drive structural improvements, and raise engineering standards",
      "Built solutions and supported technical decision-making across strategic areas of the ecosystem",
    ],
    technologies: ["React", "Node.js", "NestJS", "TypeScript", "AWS", "Azure"],
  },
  {
    role: "Senior Full Stack Developer",
    company: "YDUQS",
    location: "Rio de Janeiro, Brazil",
    period: "May 2024 - Apr 2025",
    description:
      "Built scalable web applications using React, Next.js, Node.js, and NestJS. Developed REST and GraphQL APIs with authentication and authorization.",
    highlights: [
      "Configured and managed AWS and Azure infrastructure, including containerized workloads with Docker and Kubernetes",
      "Improved performance and data reliability across MongoDB, Redis, MySQL, and PostgreSQL environments",
      "Contributed to CI/CD pipelines, code reviews, technical mentoring, and cross-functional collaboration",
    ],
    technologies: ["React", "Next.js", "Node.js", "NestJS", "Docker", "Kubernetes", "GraphQL"],
  },
  {
    role: "Senior Back-end Developer",
    company: "YDUQS",
    location: "Rio de Janeiro, Brazil",
    period: "Aug 2023 - May 2024",
    description:
      "Developed and maintained back-end services for education products with a focus on scalability, security, and integration reliability.",
    highlights: [
      "Evolved distributed architectures and APIs supporting business-critical systems",
      "Improved service stability and technical sustainability across the platform",
    ],
    technologies: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "FullStack Labs",
    location: "Granite Bay, California, USA",
    period: "Jul 2022 - May 2023",
    description:
      "Built responsive web applications using React and Next.js and enhanced APIs with Node.js and Python.",
    highlights: [
      "Developed reusable UI components, reviewed code, and helped define technical solutions aligned with product goals",
      "Implemented and evaluated tests to validate component behavior and application quality",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "Kazap Technologies",
    location: "Mogi Guaçu, São Paulo, Brazil",
    period: "Jan 2020 - May 2022",
    description:
      "Developed PWAs, SPAs, mobile applications, APIs, and microservices using modern JavaScript frameworks.",
    highlights: [
      "Implemented solutions with GraphQL, Lambda, Serverless, MongoDB, MySQL, PostgreSQL, Firebase, and Socket.io for real-time features",
      "Provided technical leadership for JavaScript initiatives, reviewing tasks, aligning requirements, and collaborating directly with clients",
    ],
    technologies: ["React", "React Native", "Next.js", "Vue.js", "Angular", "Node.js", "NestJS", "GraphQL"],
  },
];

export const ExperienceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container">
        <div ref={ref}>
          <span
            className={cn(
              "text-primary font-mono text-sm tracking-wider mb-4 block transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            // Experience
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Career progression in technical leadership
          </h2>
          <p
            className={cn(
              "text-foreground-muted max-w-2xl mb-16 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            A track record of growing from hands-on development to technical 
            leadership, while staying close to the code.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={cn(
                    "relative md:pl-20 transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary hidden md:block" />

                  <div className="p-6 md:p-8 rounded-lg bg-background-card border border-border hover:border-border-light transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-foreground-muted">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-border-light">|</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className="font-mono text-sm text-primary whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground-muted mb-6">{exp.description}</p>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-foreground-muted"
                        >
                          <span className="text-primary mt-1.5 text-xs">{">"}</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-background rounded text-foreground-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
