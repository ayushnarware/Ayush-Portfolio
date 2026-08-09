import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowDown, Sparkles, ChevronRight } from "lucide-react";
import ayushProfile from "@/assets/ayush-profile.png";
import ayushresume from "@/assets/Ayush Narware Resume.pdf";
import { profile, heroTechBadges, socialLinks } from "@/data/portfolio";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = profile.roles;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = roles[roleIndex];
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      setTimeout(type, isDeleting ? 60 : 100);
    };

    const timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techBadges = heroTechBadges;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        ></div>
        {/* Radial glow */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Available for work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Ayush{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Narware
              </span>
            </motion.h1>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-8"
            >
              <Sparkles className="h-5 w-5 text-primary shrink-0" />
              <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse align-middle"></span>
              </span>
            </motion.div>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I turn ideas into{" "}
              <span className="text-foreground font-semibold">scalable digital products</span>{" "}
              — from intuitive React interfaces to secure backend systems and
              cloud-ready applications built with Java, Python & Spring Boot.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollTo("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 group"
              >
                View My Work
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                Let's Work Together
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border-border hover:bg-secondary border"
                asChild
              >
                <a href={ayushresume} download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg"
                  alt="LeetCode"
                  className="h-6 w-6"
                />
                <span className="sr-only">LeetCode</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Image with glow/orbit + tech badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: "hsl(var(--primary))" }}
              ></div>

              {/* Rotating orbit ring */}
              <div
                className="absolute -inset-6 rounded-full border border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"
              ></div>
              <div
                className="absolute -inset-12 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]"
              ></div>

              {/* Profile image */}
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-1 animate-morph shadow-[0_0_60px_rgba(0,194,255,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={ayushProfile}
                    alt="Ayush Narware Profile Photo"
                    className="w-full h-full object-cover transform scale-110 transition-transform duration-500 hover:scale-[1.15]"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {techBadges.map((badge) => (
                <motion.div
                  key={badge.name}
                  className={`absolute ${badge.className}`}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  }}
                >
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur border border-border shadow-lg">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-xs font-medium text-foreground hidden sm:block">
                      {badge.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
