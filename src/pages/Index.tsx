import Navbar from "@/components/Portfolio/Navbar";
import Hero from "@/components/Portfolio/Hero";
import Skills from "@/components/Portfolio/Skills";
import Projects from "@/components/Portfolio/Projects";
import Education from "@/components/Portfolio/Education";
import Certifications from "@/components/Portfolio/Certifications";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";
import Experience from "@/components/Portfolio/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
