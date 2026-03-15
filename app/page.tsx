"use client";

import { Hero } from "@/components/hero";
import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { Leva } from "leva";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <Leva hidden />
    </main>
  );
}
