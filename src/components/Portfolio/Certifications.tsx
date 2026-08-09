// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { BadgeCheck, ExternalLink, Award } from "lucide-react";
// import SectionReveal from "./SectionReveal";
// import { certifications, certificationStats } from "@/data/portfolio";

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
//       <div className="absolute bottom-20 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <SectionReveal className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Certifications
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Verified credentials that validate my skills and continuous learning
//           </p>
//         </SectionReveal>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={cert.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
//               whileHover={{ y: -8 }}
//             >
//               <Card className="h-full bg-card border-border group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col">
//                 <CardContent className="p-6 flex flex-col flex-1">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
//                       <BadgeCheck className="h-6 w-6 text-primary" />
//                     </div>
//                     {cert.featured && (
//                       <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
//                         Featured
//                       </span>
//                     )}
//                   </div>

//                   <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                     {cert.title}
//                   </h3>

//                   <div className="flex items-center text-sm text-muted-foreground mb-3">
//                     <Award className="h-4 w-4 mr-2 shrink-0" />
//                     {cert.issuer} • {cert.date}
//                   </div>

//                   <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
//                     {cert.description}
//                   </p>

//                   <a
//                     href={cert.verifyUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-sm font-medium text-primary hover:underline"
//                   >
//                     Verify Credential
//                     <ExternalLink className="ml-1 h-4 w-4" />
//                   </a>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
//           {certificationStats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="text-center bg-card border-border group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
//                 <CardContent className="p-6">
//                   <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
//                     {stat.count}
//                   </div>
//                   <div className="text-sm text-muted-foreground">{stat.label}</div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;




import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ExternalLink, Award } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { certifications, certificationStats } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      <div className="absolute bottom-20 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

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
              Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified credentials that validate my skills and continuous learning
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group/cert relative"
            >
              {/* Glow sweep on hover — consistent signature across sections */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover/cert:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>

              <Card className="relative h-full bg-card border-border group-hover/cert:border-primary/50 group-hover/cert:shadow-lg group-hover/cert:shadow-primary/10 transition-all duration-300 flex flex-col overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-6 flex flex-col flex-1 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover/cert:scale-110 group-hover/cert:bg-primary/20 transition-all duration-300 relative">
                      {cert.featured && (
                        <span className="absolute inset-0 rounded-lg border border-primary/30 animate-pulse"></span>
                      )}
                      <BadgeCheck className="h-6 w-6 text-primary relative z-10" />
                    </div>
                    {cert.featured && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium border border-primary/40 text-primary rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover/cert:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Award className="h-4 w-4 mr-2 shrink-0" />
                    {cert.issuer} • {cert.date}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {cert.description}
                  </p>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary group/link w-fit"
                  >
                    Verify Credential
                    <ExternalLink className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    <span className="absolute left-6 right-6 bottom-6 h-px bg-primary scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300"></span>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {certificationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group/stat relative"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover/stat:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>
              <Card className="relative text-center bg-card border-border group-hover/stat:border-primary/40 group-hover/stat:shadow-lg group-hover/stat:shadow-primary/10 transition-all duration-300 h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500"></div>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover/stat:scale-110 transition-transform duration-300 tabular-nums">
                    {stat.count}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
