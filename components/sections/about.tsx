"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            // About
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
            Building scalable systems with technical excellence
          </h2>
          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>
              Hands-on Tech Lead and Specialist Software Engineer with strong experience 
              designing and building scalable digital products across front-end, back-end, 
              cloud, and data layers. Deep expertise in React, Next.js, Node.js, NestJS, 
              React Native, MongoDB, PostgreSQL, AWS, and Azure.
            </p>
            <p>
              Backed by a strong foundation in software architecture, distributed systems, 
              authentication, integrations, CI/CD, and technical leadership. I lead engineering 
              initiatives while remaining actively involved in implementation, code reviews, 
              architecture decisions, and complex technical problem-solving.
            </p>
            <p>
              My focus is on performance, scalability, security, and maintainable systems. 
              I believe the best technical leaders stay close to the code and understand the 
              real challenges their teams face daily.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
            {[
              { value: "7+", label: "Years Experience" },
              { value: "8+", label: "Companies" },
              { value: "3", label: "Languages Spoken" },
              { value: "4", label: "Postgrad Degrees" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
