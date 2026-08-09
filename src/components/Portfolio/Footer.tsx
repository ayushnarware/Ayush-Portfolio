// import { motion } from "framer-motion";
// import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, Sparkles } from "lucide-react";
// import { footerLinks } from "@/data/portfolio";

// const Footer = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-card border-t border-border relative overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* About */}
//           <div className="lg:col-span-2">
//             <h3 className="text-xl font-bold text-foreground mb-4">Ayush Narware</h3>
//             <p className="text-muted-foreground mb-4 max-w-md">
//               A Full Stack Developer transforming ideas into reality through code.
//               Feel free to connect with me for collaborations and opportunities.
//             </p>
//             <div className="flex items-center gap-2 text-sm text-primary mb-4">
//               <Sparkles className="h-4 w-4" />
//               <span>AI-First Development Workflow</span>
//             </div>
//             <div className="flex space-x-4">
//               <motion.a
//                 href="https://github.com/ayushnarware/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ y: -3 }}
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Github className="h-5 w-5" />
//               </motion.a>
//               <motion.a
//                 href="https://www.linkedin.com/in/ayushnarware/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ y: -3 }}
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </motion.a>
//               <motion.a
//                 href="https://www.instagram.com/mr_ayush192/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ y: -3 }}
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </motion.a>
//             </div>
//           </div>

// {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {footerLinks.map((item) => (
//                 <li key={item}>
//                   <button
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//               <li>
//                 <button
//                   onClick={() => scrollToSection("ai-tools")}
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   AI Tools
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
//             <div className="space-y-3">
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <MapPin className="h-4 w-4 text-primary shrink-0" />
//                 Bengaluru, India
//               </div>
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <Mail className="h-4 w-4 text-primary shrink-0" />
//                 ayushnarware04@gmail.com
//               </div>
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <Phone className="h-4 w-4 text-primary shrink-0" />
//                 +91 62XXXXXX12
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-muted-foreground text-center">
//             &copy; 2025 Ayush Narware. All rights reserved.
//           </p>
//           <motion.button
//             onClick={scrollToTop}
//             whileHover={{ y: -3 }}
//             whileTap={{ scale: 0.9 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
//           >
//             <ArrowUp className="h-4 w-4" />
//             Back to Top
//           </motion.button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
















import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, Sparkles } from "lucide-react";
import { footerLinks } from "@/data/portfolio";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { href: "https://github.com/ayushnarware/", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ayushnarware/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/mr_ayush192/", icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4">Ayush Narware</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              A Full Stack Developer transforming ideas into reality through code.
              Feel free to connect with me for collaborations and opportunities.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>AI-First Development Workflow</span>
            </div>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="group/social relative p-2.5 rounded-lg bg-primary/5 border border-transparent hover:border-primary/30 hover:bg-primary/10 transition-colors"
                >
                  <span className="absolute inset-0 rounded-lg border border-primary/0 group-hover/social:border-primary/40 group-hover/social:animate-ping"></span>
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors relative z-10" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="group/link relative inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-200 mr-0 group-hover/link:mr-2"></span>
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("ai-tools")}
                  className="group/link relative inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="w-0 group-hover/link:w-2 h-px bg-primary transition-all duration-200 mr-0 group-hover/link:mr-2"></span>
                  AI Tools
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Bengaluru, India
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                ayushnarware04@gmail.com
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +91 62XXXXXX12
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center">
            &copy; 2026 Ayush Narware. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group/top relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium overflow-hidden hover:bg-primary/20 transition-colors"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover/top:translate-x-full transition-transform duration-1000"></span>
            <ArrowUp className="h-4 w-4 relative z-10 group-hover/top:-translate-y-0.5 transition-transform duration-200" />
            <span className="relative z-10">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;