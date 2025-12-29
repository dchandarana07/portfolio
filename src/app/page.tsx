import {
  Navbar,
  Contact,
  Footer,
  FloatingButtons,
} from "@/components";
import { HeroLE } from "@/components/HeroLE";
import { ImpactLE } from "@/components/ImpactLE";
import { AboutLE } from "@/components/AboutLE";
import { ProjectsLE } from "@/components/ProjectsLE";
import { ExperienceLE } from "@/components/ExperienceLE";
import { SkillsLE } from "@/components/SkillsLE";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroLE />
      <ImpactLE />
      <AboutLE />
      <ProjectsLE />
      <ExperienceLE />
      <SkillsLE />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
