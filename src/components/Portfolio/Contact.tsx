// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import SectionReveal from "./SectionReveal";
// import { contactInfo } from "@/data/portfolio";

// const iconMap: Record<string, React.ElementType> = {
//   Mail,
//   Phone,
//   MapPin,
// };

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const formData = new FormData(e.currentTarget);
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         toast({
//           title: "Message sent successfully!",
//           description: "I'll get back to you soon.",
//         });
//         (e.target as HTMLFormElement).reset();
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
//       <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <SectionReveal className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Got a question, an idea, or a project you'd like to discuss? My inbox is always open!
//             Whether it's a quick query or a big collaboration, feel free to drop me a message.
//           </p>
//         </SectionReveal>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Info */}
//           <div className="lg:col-span-1 space-y-6">
//             {contactInfo.map((item, index) => {
//               const Icon = iconMap[item.icon] || Mail;
//               return (
//                 <SectionReveal key={item.label} delay={index * 0.1} direction="left">
//                   <motion.div whileHover={{ x: 4 }}>
//                     <Card className="bg-card border-border group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
//                       <CardContent className="p-6">
//                         <a
//                           href={item.href}
//                           className={`flex items-center gap-4 ${item.href ? '' : 'cursor-default'}`}
//                         >
//                           <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
//                             <Icon className="h-5 w-5 text-primary" />
//                           </div>
//                           <div className="min-w-0">
//                             <h3 className="font-semibold text-foreground">{item.label}</h3>
//                             <p className="text-muted-foreground break-all">{item.value}</p>
//                           </div>
//                         </a>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </SectionReveal>
//               );
//             })}
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <SectionReveal direction="right">
//               <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
//                 <CardContent className="p-6 sm:p-8">
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <input type="hidden" name="access_key" value="6eeff825-7e5b-4947-8704-ce53d122da19" />

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       <div>
//                         <Input
//                           name="name"
//                           placeholder="Your Name"
//                           required
//                           className="bg-background border-border focus:border-primary transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <Input
//                           name="email"
//                           type="email"
//                           placeholder="Your Email"
//                           required
//                           className="bg-background border-border focus:border-primary transition-colors"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Input
//                         name="subject"
//                         placeholder="Subject"
//                         required
//                         className="bg-background border-border focus:border-primary transition-colors"
//                       />
//                     </div>

//                     <div>
//                       <Textarea
//                         name="message"
//                         placeholder="Your Message"
//                         rows={6}
//                         required
//                         className="bg-background border-border resize-none focus:border-primary transition-colors"
//                       />
//                     </div>

//                     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
//                       <Button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full bg-primary hover:bg-primary/90"
//                       >
//                         {isSubmitting ? (
//                           "Sending..."
//                         ) : (
//                           <>
//                             <Send className="mr-2 h-4 w-4" />
//                             Send Message
//                           </>
//                         )}
//                       </Button>
//                     </motion.div>
//                   </form>
//                 </CardContent>
//               </Card>
//             </SectionReveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionReveal from "./SectionReveal";
import { contactInfo } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none"></div>

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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a question, an idea, or a project you'd like to discuss? My inbox is always open!
            Whether it's a quick query or a big collaboration, feel free to drop me a message.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = iconMap[item.icon] || Mail;
              return (
                <SectionReveal key={item.label} delay={index * 0.1} direction="left">
                  <motion.div whileHover={{ x: 4 }} className="group/contact relative">
                    {/* Glow sweep on hover — consistent signature across sections */}
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover/contact:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>

                    <Card className="relative bg-card border-border group-hover/contact:border-primary/40 group-hover/contact:shadow-lg group-hover/contact:shadow-primary/10 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300"></div>
                      <CardContent className="p-6 relative">
                        <a
                          href={item.href}
                          className={`flex items-center gap-4 ${item.href ? '' : 'cursor-default'}`}
                        >
                          <div className="p-3 bg-primary/10 rounded-lg group-hover/contact:scale-110 group-hover/contact:bg-primary/20 transition-all duration-300 shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground">{item.label}</h3>
                            <p className="text-muted-foreground break-all">{item.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <SectionReveal direction="right">
              <Card className="relative bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                {/* Ambient corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>

                <CardContent className="p-6 sm:p-8 relative">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value="6eeff825-7e5b-4947-8704-ce53d122da19" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          required
                          className="bg-background border-border focus:border-primary focus:shadow-md focus:shadow-primary/10 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          required
                          className="bg-background border-border focus:border-primary focus:shadow-md focus:shadow-primary/10 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        required
                        className="bg-background border-border focus:border-primary focus:shadow-md focus:shadow-primary/10 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        required
                        className="bg-background border-border resize-none focus:border-primary focus:shadow-md focus:shadow-primary/10 transition-all duration-300"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="relative group/btn overflow-hidden rounded-md">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full bg-primary hover:bg-primary/90 overflow-hidden"
                      >
                        {/* Sheen sweep on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse mr-2"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;