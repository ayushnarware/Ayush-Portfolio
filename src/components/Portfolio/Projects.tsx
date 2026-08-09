// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import SectionReveal from "./SectionReveal";
// import { projects } from "@/data/portfolio";
// import foodOrderingProject from "@/assets/food-ordering-project.png";
// import livepixeProject from "@/assets/livepixe-project.png";
// import FrontEndTechnologies from "@/assets/FrontEndDevelopment.png";
// import placeholderImage from "@/assets/placeholder.svg";

// const imageMap: Record<string, string> = {
//   placeholder: placeholderImage,
//   foodOrdering: foodOrderingProject,
//   livepixe: livepixeProject,
//   frontEnd: FrontEndTechnologies,
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
//       <div className="absolute top-20 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <SectionReveal className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Real-world applications built with modern technologies and best practices
//           </p>
//         </SectionReveal>

//         <div className="space-y-16">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="overflow-hidden bg-card border-border group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
//                 <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
//                   {/* Project Image */}
//                   <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
//                     <div className="aspect-video lg:aspect-auto lg:h-full relative min-h-[220px]">
//                       <img
//                         src={imageMap[project.image] || placeholderImage}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                       <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-medium text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         View Live
//                       </div>
//                     </div>
//                   </div>

//                   {/* Project Details */}
//                   <CardContent className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
//                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
//                       {project.title}
//                     </h3>

//                     <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
//                       {project.description}
//                     </p>

//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2 mb-8">
//                       {project.technologies.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Project Links */}
//                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                       <Button
//                         asChild
//                         className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
//                       >
//                         <a
//                           href={project.liveUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <ExternalLink className="mr-2 h-4 w-4" />
//                           View Live
//                         </a>
//                       </Button>

//                       <Button
//                         variant="outline"
//                         asChild
//                         className="border-border hover:bg-secondary w-full sm:w-auto"
//                       >
//                         <a
//                           href={project.sourceUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Github className="mr-2 h-4 w-4" />
//                           Source Code
//                         </a>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Projects CTA */}
//         <SectionReveal className="text-center mt-16">
//           <Button
//             variant="outline"
//             size="lg"
//             asChild
//             className="border-border hover:bg-secondary"
//           >
//             <a
//               href="https://github.com/ayushnarware"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github className="mr-2 h-4 w-4" />
//               View All Projects on GitHub
//             </a>
//           </Button>
//         </SectionReveal>
//       </div>
//     </section>
//   );
// };

// export default Projects;

















import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { projects } from "@/data/portfolio";
import foodOrderingProject from "@/assets/food-ordering-project.png";
import livepixeProject from "@/assets/livepixe-project.png";
import FrontEndTechnologies from "@/assets/FrontEndDevelopment.png";
import sociallinkProject from "@/assets/sociallink.png";

const imageMap: Record<string, string> = {
  placeholder: sociallinkProject,
  foodOrdering: foodOrderingProject,
  livepixe: livepixeProject,
  frontEnd: FrontEndTechnologies,
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      <div className="absolute top-20 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 20%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 20%, black, transparent)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </SectionReveal>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group/proj relative"
            >
              {/* Glow sweep on hover — consistent signature across sections */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/25 to-primary/0 opacity-0 group-hover/proj:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>

              <Card className="relative overflow-hidden bg-card border-border group-hover/proj:border-primary/40 group-hover/proj:shadow-xl group-hover/proj:shadow-primary/10 transition-all duration-500">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video lg:aspect-auto lg:h-full relative min-h-[220px]">
                      <img
                        src={imageMap[project.image] || sociallinkProject}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/proj:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover/proj:opacity-100 transition-opacity duration-500"></div>
                      {/* Scan-line sweep across the image on hover */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover/proj:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover/proj:translate-x-[400%] transition-transform duration-1000 ease-out"></div>
                      </div>
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-medium text-primary border border-primary/20 opacity-0 group-hover/proj:opacity-100 transition-opacity duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        View Live
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <CardContent className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover/proj:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors duration-200"
                          style={{ transitionDelay: `${i * 20}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                      >
                        <a
                        
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        asChild
                        className="border-border hover:bg-secondary hover:border-primary/40 w-full sm:w-auto"
                      >
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <SectionReveal className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:bg-secondary hover:border-primary/40 transition-colors"
          >
            <a
              href="https://github.com/ayushnarware"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Projects;