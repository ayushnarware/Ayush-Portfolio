import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle University",
      date: "Aug 2025",
      description: "Professional certification validating expertise in building and managing ...",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_oraclecertified-oraclecloud-datascience-activity-7363447914049765376-OMak?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E821595BA9F67A69CB085D2CA696D7D304BC6E987CE70837BDCA9239A93AD2E6",
      featured: true,
    },
    {
      title: "NodeJs + ExpressJs + MongoDB",
      issuer: "Knowledge Gate",
      date: "Aug 2025",
      description: "Comprehensive certification covering backend development with Node.js, Express.js, and MongoDB integration.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_im-happy-to-share-that-ive-obtained-a-new-activity-7362169256538509314-r7lP",
      verifyUrl: "https://www.knowledgegate.ai/certificate/9CE992ED",
      featured: true,
    },
    {
      title: "React and Redux Certification",
      issuer: "Complete Coding",
      date: "Dec 2024",
      description: "Advanced React development with state management using Redux toolkit.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_react-redux-activity-7274292584712192000-Ez88?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://learn.completecoding.in/verify-certificate?serialno=BFNCXDOJ",
    },
    {
      title: "Git and GitHub Course",
      issuer: "Geekster",
      date: "Nov 2024",
      description: "Version control systems and collaborative development workflows.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_git-github-geekster-activity-7263161602290393088-1TVl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://certifications.geekster.in/R2EFQ6PbGlRbB6Yv4nBnX-geekster.pdf",
    },
    {
      title: "JavaScript Certification Test",
      issuer: "Complete Coding",
      date: "Nov 2024",
      description: "Core JavaScript concepts, ES6+ features, and modern development practices.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_im-happy-to-share-that-ive-obtained-a-new-activity-7259051018179469313-vrKj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://learn.completecoding.in/verify-certificate?serialno=7T8KMWQR",
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "DataFlair",
      date: "Sep 2024",
      description: "Comprehensive coverage of DSA concepts with Java implementation.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_java-dsa-activity-7236394447423291392-RKVz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://data-flair.training/verify/7EEDEC49B8-7CAB38B476-736D63CB25/",
    },
    {
      title: "Introduction to JavaScript",
      issuer: "DataFlair",
      date: "Aug 2024",
      description: "Fundamentals of JavaScript programming and web development.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_javascript-dataflair-activity-7229200694979796993-_JPa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://data-flair.training/verify/7EEDEC49B4-7C8DC61BF8-736D63CB25/",
    },
    {
      title: "Interactive Photo Album Project",
      issuer: "Geekster",
      date: "Jul 2024",
      description: "Project-based learning for building interactive web applications.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_im-happy-to-share-that-ive-obtained-a-new-activity-7220838378815078400-sqUk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://certifications.geekster.in/avlzXG6GfABro4nxEJSOM-geekster.pdf",
    },
    {
      title: "SQL Certification: Basic to Advanced",
      issuer: "Geekster",
      date: "Jul 2024",
      description: "Database design, queries, and advanced SQL operations.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_geekster-activity-7215926011870289920-fHuL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://certifications.geekster.in/8qyOEqHnh5rX5wk1bnsau-geekster.pdf",
    },
    {
      title: "GIAC Python Coder (GPYC)",
      issuer: "Great Learning",
      date: "May 2024",
      description: "Python programming certification with practical applications.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_greatlearningacademy-greatlearning-glacertificate-activity-7202285357621538817-oaVB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://www.mygreatlearning.com/certificate/SOKBZIBS",
    },
    {
      title: "Mastering JavaScript Fundamentals",
      issuer: "Geekster",
      date: "May 2024",
      description: "Deep dive into JavaScript core concepts and best practices.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_greatlearningacademy-greatlearning-glacertificate-activity-7201654266451615746-MVX4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://certifications.geekster.in/_ZrZBxXUy3jnkC9FWFGzE-geekster.pdf",
    },
    {
      title: "OOPs in Java",
      issuer: "Great Learning",
      date: "May 2024",
      description: "Object-oriented programming principles in Java.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_im-happy-to-share-that-ive-obtained-a-new-activity-7196058100183801857-TG3A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://www.mygreatlearning.com/certificate/RJGHOUTY",
    },
    {
      title: "Responsive Landing Page with HTML/CSS",
      issuer: "Geekster",
      date: "Apr 2024",
      description: "Modern web design with responsive layouts and CSS techniques.",
      viewUrl: "https://www.linkedin.com/posts/ayushnarware_im-happy-to-share-that-ive-obtained-a-new-activity-7195678077643804673-f-6w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIeTSMBv-k_io7Grb6gyHveu-YMbotj-zI",
      verifyUrl: "https://certifications.geekster.in/9TcipBGhB8NRwLtrN_II4-geekster.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Licenses & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className={`group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 bg-card border-border ${
                cert.featured ? 'border-primary/50 ring-1 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${cert.featured ? 'bg-primary/20' : 'bg-primary/10'}`}>
                      <Award className={`h-4 w-4 ${cert.featured ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    {cert.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-medium text-primary">
                  {cert.issuer}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs border-border hover:bg-secondary"
                    asChild
                  >
                    <a
                      href={cert.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 text-xs bg-primary/90 hover:bg-primary"
                    asChild
                  >
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Total Certifications", count: certifications.length+"+" },
            { label: "Platforms", count: "7+" },
            { label: "Learning Hours", count: "645+" },
          ].map((stat) => (
            <Card key={stat.label} className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;