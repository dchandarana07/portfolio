import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Skills,
  Contact,
  Footer,
  FloatingButtons,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
