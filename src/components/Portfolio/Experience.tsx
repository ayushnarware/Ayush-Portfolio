// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
// import SectionReveal from "./SectionReveal";
// import { experience } from "@/data/portfolio";

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
//       <div className="absolute top-1/4 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <SectionReveal className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Professional Experience
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             My professional journey and industry exposure
//           </p>
//         </SectionReveal>

//         {/* Timeline */}
//         <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
//           {/* Timeline Line */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

//           <div className="space-y-12">
//             {experience.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`relative flex flex-col md:flex-row ${
//                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                 }`}
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 mt-6">
//                   {item.status === "current" && (
//                     <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
//                   )}
//                 </div>

//                 {/* Content Card */}
//                 <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 ${
//                   index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0 md:ml-auto'
//                 }`}>
//                   <motion.div whileHover={{ y: -4 }}>
//                     <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group h-full">
//                       <CardContent className="p-6">
//                         <div className="flex items-start gap-3 mb-4">
//                           <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
//                             <Briefcase className="h-5 w-5 text-primary" />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                               {item.role}
//                             </h3>

//                             <div className="space-y-2 mb-4">
//                               <div className="flex items-center text-muted-foreground text-sm">
//                                 <MapPin className="h-4 w-4 mr-2 shrink-0" />
//                                 <span className="break-words">{item.company} • {item.location}</span>
//                               </div>
//                               <div className="flex items-center text-muted-foreground text-sm">
//                                 <Calendar className="h-4 w-4 mr-2 shrink-0" />
//                                 {item.period}
//                               </div>
//                             </div>

//                             <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
//                               {item.description}
//                             </p>

//                             {item.bullets && (
//                               <ul className="space-y-2 mb-4">
//                                 {item.bullets.map((bullet, i) => (
//                                   <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
//                                     <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
//                                     <span className="break-words">{bullet}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}

//                             {item.status === "current" && (
//                               <div className="mt-3 inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
//                                 Currently Working
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;




import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="absolute top-1/4 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

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
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and industry exposure
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
          {/* Timeline Line — glowing gradient */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-primary/0 via-primary to-primary/0 h-32"
              animate={{ y: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Marker — rotated diamond instead of plain dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 bg-primary rotate-45 border-4 border-background z-10 mt-6">
                  {item.status === "current" && (
                    <div className="absolute inset-0 bg-primary animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                }`}>
                  
                  <motion.div whileHover={{ y: -4 }} className="group/exp relative">
                    <Card
                      className={`relative bg-card border-border group-hover/exp:shadow-lg group-hover/exp:shadow-primary/10 transition-all duration-300 h-full overflow-hidden border-l-4 ${
                        item.status === "current" ? "border-l-primary" : "border-l-border group-hover/exp:border-l-primary/60"
                      }`}
                    >
                      <CardContent className="p-6 relative">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover/exp:scale-110 group-hover/exp:bg-primary/20 transition-all duration-300 shrink-0 relative">
                            {item.status === "current" && (
                              <span className="absolute inset-0 rounded-lg border border-primary/30 animate-pulse"></span>
                            )}
                            <Briefcase className="h-5 w-5 text-primary relative z-10" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover/exp:text-primary transition-colors">
                              {item.role}
                            </h3>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-muted-foreground text-sm">
                                <MapPin className="h-4 w-4 mr-2 shrink-0" />
                                <span className="break-words">{item.company} • {item.location}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground text-sm">
                                <Calendar className="h-4 w-4 mr-2 shrink-0" />
                                {item.period}
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                              {item.description}
                            </p>

                            {item.bullets && (
                              <ul className="space-y-2 mb-4">
                                {item.bullets.map((bullet, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span className="break-words">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {item.status === "current" && (
                              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border border-primary/40 text-primary rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                Currently Working
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;