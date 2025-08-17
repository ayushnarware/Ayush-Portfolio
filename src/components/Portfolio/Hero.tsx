import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import ayushProfile from "@/assets/ayush-profile.png";
import ayushresume from "@/assets/Ayush Narware Resume.pdf";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span 
                className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Ayush Narware
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              A passionate MCA student and Full Stack Developer, crafting scalable web applications 
              with a keen interest in cloud technologies and DevOps.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary"
                asChild
              >
                <a href={ayushresume} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="https://github.com/ayushnarware/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ayushnarware/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/mr_ayush192/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          {/* <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-1 animate-pulse-slow"
                style={{ 
                  background: "var(--gradient-primary)",
                  animation: "morph 6s ease-in-out infinite"
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={ayushProfile}
                    alt="Ayush Narware Profile Photo"
                    className="w-full h-full object-cover transform scale-110 transition-transform duration-500 hover:scale-115"
                  />
                </div>
              </div> */}
              
              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full animate-float-delayed"></div>
            </div>
          </div> */}
        
        <div className="order-1 lg:order-2 flex justify-center">
  <div className="relative">
    {/* Morphing Profile Container */}
    <div 
      className="w-80 h-80 lg:w-96 lg:h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-1 animate-morph"
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-card">
        <img
          src={ayushProfile}
          alt="Ayush Narware Profile Photo"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-500 hover:scale-[1.15]"
        />
      </div>
    </div>

    {/* Floating Elements */}
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full animate-float-delayed"></div>
  </div>
</div>
        
        
        </div>
      </div>

    </section>
  );
};

export default Hero;