// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { cn } from "@/lib/utils";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [theme, setTheme] = useState("light");
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     // Check for saved theme in localStorage
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     if (savedTheme === "light") {
//       document.documentElement.classList.add("light");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
    
//     if (newTheme === "light") {
//       document.documentElement.classList.add("light");
//     } else {
//       document.documentElement.classList.remove("light");
//     }
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(sectionId);
//       setIsOpen(false);
//     }
//   };

// const navItems = [
//     { id: "hero", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "ai-tools", label: "AI Tools" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "certifications", label: "Certifications" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-xl font-bold text-foreground">Ayush Narware</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={cn(
//                     "text-sm font-medium transition-colors hover:text-primary",
//                     activeSection === item.id
//                       ? "text-primary"
//                       : "text-muted-foreground"
//                   )}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={toggleTheme}
//                 className="ml-4"
//               >
//                 {theme === "dark" ? (
//                   <Sun className="h-4 w-4" />
//                 ) : (
//                   <Moon className="h-4 w-4" />
//                 )}
//               </Button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//             >
//               {theme === "dark" ? (
//                 <Sun className="h-4 w-4" />
//               ) : (
//                 <Moon className="h-4 w-4" />
//               )}
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={cn(
//                   "block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-muted rounded-md",
//                   activeSection === item.id
//                     ? "text-primary bg-muted"
//                     : "text-muted-foreground"
//                 )}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;















import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "ai-tools", label: "AI Tools" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b transition-colors duration-300",
        scrolled ? "border-primary/20 shadow-sm shadow-primary/5" : "border-border"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> */}
            <h1 className="text-xl font-bold text-foreground">Ayush Narware</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary py-1",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4 relative overflow-hidden"
              >
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="overflow-hidden"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </motion.span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-muted rounded-md",
                    activeSection === item.id
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  )}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
