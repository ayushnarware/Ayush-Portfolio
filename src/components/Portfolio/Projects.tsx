import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import foodOrderingProject from "@/assets/food-ordering-project.png";
import livepixeProject from "@/assets/livepixe-project.png";

const Projects = () => {
  const projects = [
    {
      title: "Online Food Ordering Application",
      description: "A full-stack web application using React JS, Redux, Spring Boot, and MySQL, featuring distinct user roles and real-time order tracking.",
      image: foodOrderingProject,
      liveUrl: "https://ayushnarware.github.io/OnlineFood",
      sourceUrl: "https://github.com/ayushnarware/OnlineFood",
      technologies: ["React", "Redux", "Spring Boot", "MySQL", "REST API"],
    },
    {
      title: "LivePixel - Interactive Photo Album",
      description: "An API-based platform for users to search, describe, and download photos, with a fully responsive UI optimized for all devices.",
      image: livepixeProject,
      liveUrl: "https://ayushnarware.github.io/LivePixe/",
      sourceUrl: "https://github.com/ayushnarware/LivePixe",
      technologies: ["JavaScript", "API Integration", "Responsive Design", "Photo Management"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Academic Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden bg-card border-border group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video lg:aspect-auto lg:h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90"
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
                      className="border-border hover:bg-secondary"
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
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:bg-secondary"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;