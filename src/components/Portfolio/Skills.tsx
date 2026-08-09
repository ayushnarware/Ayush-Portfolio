// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import SectionReveal from "./SectionReveal";
// import { skillCategories, skillStats } from "@/data/portfolio";

// const Skills = () => {
//   // Animated counter hook
//   const useCountUp = (target: number, start: boolean) => {
//     const [value, setValue] = useState(0);
//     useEffect(() => {
//       if (!start) return;
//       let current = 0;
//       const increment = Math.ceil(target / 40);
//       const interval = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           setValue(target);
//           clearInterval(interval);
//         } else {
//           setValue(current);
//         }
//       }, 30);
//       return () => clearInterval(interval);
//     }, [target, start]);
//     return value;
//   };

//   const StatCard = ({ stat, index }: { stat: (typeof skillStats)[0]; index: number }) => {
//     const [inView, setInView] = useState(false);
//     const value = useCountUp(stat.count, inView);
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         onViewportEnter={() => setInView(true)}
//       >
//         <Card className="text-center bg-card border-border group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
//           <CardContent className="p-6">
//             <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
//               {value}+
//             </div>
//             <div className="text-sm text-muted-foreground">{stat.label}</div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     );
//   };

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
//       {/* Decorative blobs */}
//       <div className="absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>
//       <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <SectionReveal className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Technical Skills
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A comprehensive toolkit for building modern, scalable applications
//           </p>
//         </SectionReveal>

//         <div className="space-y-12">
//           {skillCategories.map((category, categoryIndex) => (
//             <div key={category.title} className="space-y-6">
//               <SectionReveal direction="left">
//                 <h3 className="text-xl sm:text-2xl font-semibold text-foreground border-b-2 border-primary/20 pb-2 inline-block">
//                   {category.title}
//                 </h3>
//               </SectionReveal>

//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, y: 30, scale: 0.9 }}
//                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{
//                       duration: 0.4,
//                       delay: (categoryIndex * 0.05) + (skillIndex * 0.04),
//                     }}
//                     whileHover={{ y: -8, scale: 1.05 }}
//                   >
//                     <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card border-border hover:border-primary/50 h-full">
//                       <CardContent className="p-3 sm:p-4 text-center flex flex-col items-center justify-center h-full">
//                         <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
//                           {skill.icon.startsWith("http") ? (
//                             <img
//                               src={skill.icon}
//                               alt={skill.name}
//                               loading="lazy"
//                               className="w-10 h-10 mx-auto object-contain"
//                             />
//                           ) : (
//                             <span>{skill.icon}</span>
//                           )}
//                         </div>
//                         <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
//                           {skill.name}
//                         </span>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Skills Stats */}
//         <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {skillStats.map((stat, index) => (
//             <StatCard key={stat.label} stat={stat} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;















import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionReveal from "./SectionReveal";
import { skillCategories, skillStats } from "@/data/portfolio";

const Skills = () => {
  // Animated counter hook
  const useCountUp = (target: number, start: boolean) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (!start) return;
      let current = 0;
      const increment = Math.ceil(target / 40);
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setValue(target);
          clearInterval(interval);
        } else {
          setValue(current);
        }
      }, 30);
      return () => clearInterval(interval);
    }, [target, start]);
    return value;
  };

  const StatCard = ({ stat, index }: { stat: (typeof skillStats)[0]; index: number }) => {
    const [inView, setInView] = useState(false);
    const value = useCountUp(stat.count, inView);
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onViewportEnter={() => setInView(true)}
        className="group/stat relative"
      >
        <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover/stat:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>
        <Card className="relative text-center bg-card border-border group-hover/stat:border-primary/40 group-hover/stat:shadow-lg group-hover/stat:shadow-primary/10 transition-all duration-300 h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500"></div>
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2 group-hover/stat:scale-110 transition-transform duration-300 tabular-nums">
              {value}+
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 30%, black, transparent)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </SectionReveal>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <SectionReveal direction="left">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0"></span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground pb-2 relative">
                    {category.title}
                    <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"></span>
                  </h3>
                </div>
              </SectionReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: (categoryIndex * 0.05) + (skillIndex * 0.04),
                    }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group/skill relative"
                  >
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover/skill:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>
                    <Card className="relative group-hover/skill:shadow-lg group-hover/skill:shadow-primary/20 transition-all duration-300 bg-card border-border group-hover/skill:border-primary/50 h-full overflow-hidden">
                      <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      <CardContent className="p-3 sm:p-4 text-center flex flex-col items-center justify-center h-full">
                        <div className="text-3xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon.startsWith("http") ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              loading="lazy"
                              className="w-10 h-10 mx-auto object-contain"
                            />
                          ) : (
                            <span>{skill.icon}</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors text-center">
                          {skill.name}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;