import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      title: "Master of Computer Applications (MCA)",
      institution: "Technocrats Institute of Technology, Bhopal ",
      period: "Jul 2025 – Present",
      description: "Advanced studies in computer applications with focus on software development and emerging technologies.",
      status: "current",
    },
    {
      title: "Java & Python Full Stack Development Training",
      institution: "KodNest Technologies Private Limited, Bengaluru",
      period: "Jul 2025 – Jan 2026",
      description: "Comprehensive training in full-stack development covering both frontend and backend technologies.",
      status: "current",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Makhanlal Chaturvedi National University, Bhopal",
      period: "Jul 2022 – Jun 2025",
      description: "CGPA: 7.55 - Strong foundation in computer science fundamentals and programming.",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey in technology and software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                  {item.status === "current" && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-muted-foreground text-sm">
                              <MapPin className="h-4 w-4 mr-2" />
                              {item.institution}
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              {item.period}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>

                          {item.status === "current" && (
                            <div className="mt-3 inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              Currently Enrolled
                            </div>
                          )}
                          {item.status === "Completed" && (
                            <div className="mt-3 inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                             Completed
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
