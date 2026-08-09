import { motion } from "framer-motion";
import { Code2, Rocket, Users, ShieldCheck } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { about, aboutHighlights } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Rocket,
  Users,
  ShieldCheck,
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story text */}
          <SectionReveal direction="left">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Me
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {about.heading}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                {about.highlight}
              </span>
            </h3>
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/ayushnarware"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                See my GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/ayushnarware/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </SectionReveal>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((item, index) => {
              const Icon = iconMap[item.icon] || Code2;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
