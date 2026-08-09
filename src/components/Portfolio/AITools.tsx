// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Sparkles, Cpu } from "lucide-react";
// import SectionReveal from "./SectionReveal";
// import { aiTools } from "@/data/portfolio";

// const AITools = () => {
//   return (
//     <section id="ai-tools" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
//       <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <SectionReveal className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
//             <Sparkles className="h-4 w-4" />
//             AI-Powered Development
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             AI Tools I Use Daily
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Leveraging AI to accelerate development, improve code quality, and solve complex problems faster
//           </p>
//         </SectionReveal>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//           {aiTools.map((tool, index) => (
//             <motion.div
//               key={tool.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.4, delay: index * 0.08 }}
//               whileHover={{ y: -8 }}
//             >
//               <Card className="h-full bg-card border-border group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
//                 <CardContent className="p-5 flex flex-col items-center text-center h-full">
//                   <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-xl bg-primary/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
//                     {tool.icon.startsWith("http") ? (
//                       <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
//                     ) : (
//                       <span className="text-2xl">{tool.icon}</span>
//                     )}
//                   </div>
//                   <h3 className="text-sm font-semibold text-foreground mb-1">{tool.name}</h3>
//                   <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* AI Info Highlight */}
//         <SectionReveal className="mt-12">
//           <Card className="bg-card border-border hover:border-primary/40 transition-all duration-300">
//             <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
//               <div className="p-4 bg-primary/10 rounded-2xl shrink-0">
//                 <Cpu className="h-8 w-8 text-primary" />
//               </div>
//               <div className="text-center sm:text-left">
//                 <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
//                   AI-First Development Workflow
//                 </h3>
//                 <p className="text-muted-foreground text-sm sm:text-base">
//                   I integrate AI tools throughout the development lifecycle — from architecture planning and code generation to testing, debugging, and documentation. This accelerates delivery while maintaining high code quality and security standards.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </SectionReveal>
//       </div>
//     </section>
//   );
// };

// export default AITools;










import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Cpu, Zap } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { aiTools } from "@/data/portfolio";

const stats = [
  { label: "AI Tools in Workflow", value: "10+" },
  { label: "Faster Iteration", value: "3x" },
  { label: "Code Reviewed by AI", value: "100%" },
];

const AITools = () => {
  return (
    <section id="ai-tools" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

      {/* Subtle neural-grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${(i * 13 + 7) % 100}%`,
              top: `${(i * 27 + 15) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4 font-mono">
            <Sparkles className="h-4 w-4 animate-pulse" />
            AI-Powered Development
            <span className="inline-block w-1.5 h-3.5 bg-primary/70 animate-[blink_1s_step-end_infinite] ml-0.5"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
              AI Tools I Use Daily
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Leveraging AI to accelerate development, improve code quality, and solve complex problems faster
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl sm:text-3xl font-bold text-primary flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group/card relative"
            >
              {/* Glow sweep on hover — signature element */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover/card:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>

              <Card className="relative h-full bg-card border-border group-hover/card:border-primary/50 group-hover/card:shadow-lg group-hover/card:shadow-primary/10 transition-all duration-300 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-5 flex flex-col items-center text-center h-full">
                  <div className="relative w-12 h-12 mb-3 flex items-center justify-center rounded-xl bg-primary/10 group-hover/card:scale-110 group-hover/card:bg-primary/20 group-hover/card:rotate-6 transition-all duration-300">
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-xl border border-primary/0 group-hover/card:border-primary/40 group-hover/card:animate-ping"></span>
                    {tool.icon.startsWith("http") ? (
                      <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain relative z-10" />
                    ) : (
                      <span className="text-2xl relative z-10">{tool.icon}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Info Highlight */}
        <SectionReveal className="mt-12">
          <Card className="relative bg-card border-border hover:border-primary/40 transition-all duration-300 overflow-hidden group">
            {/* Animated border sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

            <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative">
              <div className="p-4 bg-primary/10 rounded-2xl shrink-0 relative">
                <span className="absolute inset-0 rounded-2xl border border-primary/20 animate-pulse"></span>
                <Cpu className="h-8 w-8 text-primary relative z-10" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  AI-First Development Workflow
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  I integrate AI tools throughout the development lifecycle — from architecture planning and code generation to testing, debugging, and documentation. This accelerates delivery while maintaining high code quality and security standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AITools;