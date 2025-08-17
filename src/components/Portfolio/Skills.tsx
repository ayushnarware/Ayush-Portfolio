import { Card, CardContent } from "@/components/ui/card";


const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "https://camo.githubusercontent.com/0d4b500c99671bf83bcb747e4f25f3da28765f2bbb4cdd9733c09f9a46381aaa/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176612f6a6176612d6f726967696e616c2e737667" },
       , { name: "Python", icon: "https://camo.githubusercontent.com/d1652ce9d9e41d898ea03bd8772e8accb903947dc6bba2a410d76462f7d63d1b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f707974686f6e2f707974686f6e2d6f726967696e616c2e737667" },
        { name: "JavaScript", icon: "https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "SpringBoot", icon: "https://camo.githubusercontent.com/6d836114e08a9f246b20f8b589a26010ddf99f37b90a157e1df38e19705a5ea5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f737072696e672f737072696e672d6f726967696e616c2e737667" },
        { name: "React.js", icon: "https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" },
        { name: "Node.js", icon: "https://camo.githubusercontent.com/fafaeabfcab6651a07955fbce34b8fb29d2536bcb499c5112e01bbe7377f9399/68747470733a2f2f63646e2e73696d706c6569636f6e732e6f72672f6e6f6465646f746a732f333339393333" },
        { name: "Bootstrap", icon: "https://camo.githubusercontent.com/76d139c63b8817582a8948b587a2d66b8a5796dc0f7df13c58f1259e88e9226e/68747470733a2f2f63646e2e73696d706c6569636f6e732e6f72672f626f6f7473747261702f373935324233" },
        { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Django", icon: "https://camo.githubusercontent.com/2ea2f5d54a9fda39c543ef1d1948b6e5b1fba0798b383963b5550de7c4eb16ee/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646a616e676f2f646a616e676f2d706c61696e2e737667" },
        { name: "Hibernate", icon: "https://www.svgrepo.com/show/353874/hibernate.svg" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "https://camo.githubusercontent.com/2d869f303f8110e509cfffdb4bab8cb8cd17667d1e624610cf1e16fe00422792/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d617773" },
        { name: "Azure", icon: "https://camo.githubusercontent.com/7010699f8506fb41b54dd0af1a7ce52292834158a4813d611e6fd0ba5d827323/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f617a7572652f617a7572652d6f726967696e616c2e737667" },
        { name: "GCP", icon: "https://camo.githubusercontent.com/9ff694a6846373e469e9fb1ccfe727205c8502185e4ea9e9b107ee5d0aef2427/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f676f6f676c65636c6f75642f676f6f676c65636c6f75642d6f726967696e616c2e737667" },
        { name: "Docker", icon: "https://camo.githubusercontent.com/869b011ef3778c6dce9288ee988f59caec696153e3afb7219d858c05d317e368/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d646f636b6572" },
        { name: "Kubernetes", icon: "https://camo.githubusercontent.com/28a688e013239850109114b7790d453e84faf37567d698483e81ee59f6dd98c8/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6b756265726e657465732f6b756265726e657465732d706c61696e2e737667" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/jenkins.svg" },
        { name: "Git", icon: "https://camo.githubusercontent.com/15166a15835f145259844be455ab5945594a70c48a3090aa83d193bd5e3e9bc5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667" },
        { name:"github", icon: "https://raw.githubusercontent.com/gilbarbara/logos/de2c1f96ff6e74ea7ea979b43202e8d4b863c655/logos/github-octocat.svg"}
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://camo.githubusercontent.com/8b690f4dff81513c7425f3b8f6e66b34a1dea43e22562037eeb5449d18571c89/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d7973716c2f6d7973716c2d6f726967696e616c2e737667" },
        { name: "MongoDB", icon: "https://camo.githubusercontent.com/90700a62313a7ab044939bb96a71304f22a7e179cc503cd565b2e793e4f492c0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d6f6e676f64622f6d6f6e676f64622d6f726967696e616c2e737667" },
        { name: "SQLite", icon: "https://camo.githubusercontent.com/f64c5bc70f89ece5d0abef6d1aa6626da4c513fbd8ca7f3dcc0812fea0108df8/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f73716c6974652f73716c6974652d6f726967696e616c2e737667" },
        { name: "Oracle", icon: "https://camo.githubusercontent.com/c3618c0f71e7c83d1ef568442d32700e8e4b8492181e8bd5312e1a2a03408b85/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6f7261636c652f6f7261636c652d6f726967696e616c2e737667" },
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        { name: "JUnit", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/junit/junit-original.svg" },
        { name: "Selenium", icon: "https://camo.githubusercontent.com/a6168e2a7e177d2300f362e560ed7c3d498e068ba449d57dab3af6bec356d813/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f73656c656e69756d2f73656c656e69756d2d6f726967696e616c2e737667" },
        { name: "Postman", icon: "https://camo.githubusercontent.com/5b0b5b0ff513c0fbf98618d906122d0099582b0aae94e33c04c8a75848367301/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d706f73746d616e" },
        { name: "Jira", icon: "https://camo.githubusercontent.com/846a58b5795502a7f7b4016dd2c934bad2d3b80341db7ce9fc0ada3c8a1ac2d3/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6972612f6a6972612d6f726967696e616c2e737667" },
        { name: "PyTest", icon: "https://camo.githubusercontent.com/e7f1aeeed3fb9c23ba0eaf74ae91d273b5841328a052370bb76d1115621de05b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7079746573742f7079746573742d6f726967696e616c2e737667" },
        { name: "Intellij", icon: "https://camo.githubusercontent.com/48cffc9d655eaafd91c6a3d582216fab5ef33c353aa403e3587a92a3bde74f0a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f696e74656c6c696a2f696e74656c6c696a2d6f726967696e616c2e737667" },
        { name: "VsCode", icon: "https://camo.githubusercontent.com/f39f203ca1defeb47e3505ef9044d3303c038c60de7e67f6c229992602e59128/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground border-b-2 border-primary/20 pb-2 inline-block">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skill.name}
                    className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-card border-border hover:border-primary/50"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                    }}
                  >
                    {/* <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </CardContent> */}




                    <CardContent className="p-4 text-center">
  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
    {skill.icon.startsWith("http") ? (
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-10 h-10 mx-auto object-contain" 
      />
    ) : (
      <span>{skill.icon}</span>
    )}
  </div>
  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
    {skill.name}
  </span>
</CardContent>






                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Specify Programming Languages", count: "3+" },
            { label: "Frameworks & Libraries", count: "7+" },
            { label: "Cloud Platforms", count: "3+" },
            { label: "Development Tools", count: "10+" },
          ].map((stat, index) => (
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

export default Skills;