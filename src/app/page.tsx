import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <div className="">
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Resume />
      </div>

      {/* Contact Footer */}
      <Contact />
    </div>
  );
}
