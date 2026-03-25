import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye, Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.resume-card', 
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const downloadResume = () => {
    const resumeContent = `
KAUSHIK MUKHERJEE
==================
Full Stack Developer

Contact:
Email: kaushik2005m@gmail.com
Phone: 8100610609
GitHub: github.com/Kaushik2709
LinkedIn: linkedin.com/in/Kaushik

About:
Full Stack Developer with experience designing, building, and scaling production-grade web and mobile applications using React Native, React, Node.js, and MongoDB.
B.Sc. Computer Science (4-Year Honours), University of Calcutta. Freelance Full Stack Developer since 2022.

Technical Skills:
- Frontend: React, React Native, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Zustand, DaisyUI, Shadcn UI
- Backend: Node.js, Express.js, MongoDB, SQL, PostgreSQL, REST API Design, JWT, bcrypt, Socket.io, Mongoose
- Architecture & Patterns: MVC, RBAC, Modular Design, Scalable API Architecture, WebSockets
- DevOps & Tools: Git, Postman, Render, Vercel, Docker (Basics), CI/CD Concepts

Experience:
Full Stack Developer | H2M (Hand2Mart) | Jan 2024 – Sep 2025
- Developed production React Native app serving 500+ active users
- Implemented JWT auth, RBAC, and secure API authorization
- Built RESTful APIs using Node.js/Express following MVC architecture

Freelance Full Stack Developer | May 2022 – Present
- Delivered full-stack web/mobile apps across e-commerce, finance, event domains
- Designed MongoDB schemas, CRUD operations, indexing strategies
- Deployed production apps using Render and Vercel

Education:
B.Sc. Computer Science (4-Year Honours) | University of Calcutta
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kaushik_Mukherjee_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "H2M (Hand2Mart)",
      period: "Jan 2024 – Sep 2025",
      description: "Developed and deployed a production React Native application serving 500+ active users. Implemented JWT-based authentication, RBAC, and built RESTful APIs using Node.js/Express following MVC architecture."
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Freelance",
      period: "May 2022 – Present",
      description: "Delivered full-stack web and mobile applications across e-commerce, finance, and event management domains. Designed MongoDB schemas, deployed on Render and Vercel."
    }
  ];

  const education = [
    {
      degree: "B.Sc. Computer Science (4-Year Honours)",
      institution: "University of Calcutta",
      period: "Ongoing",
      description: "Studying computer science fundamentals, data structures, algorithms, system design, and software engineering principles."
    }
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Zustand",
        "DaisyUI",
        "Shadcn UI"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "PostgreSQL",
        "REST API Design",
        "JWT",
        "bcrypt",
        "Socket.io",
        "Mongoose"
      ]
    },
    {
      title: "Architecture & Patterns",
      skills: [
        "MVC",
        "RBAC",
        "Modular Design",
        "Scalable API Architecture",
        "WebSockets"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git",
        "Postman",
        "Render",
        "Vercel",
        "Docker (Basics)",
        "CI/CD Concepts"
      ]
    }
  ];

  return (
    <section id="resume" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my resume or explore my experience, skills, and education below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg"
            onClick={downloadResume}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl hover-glow"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.open('mailto:kaushik2005m@gmail.com', '_blank')}
            className="border-primary/20 hover:bg-primary/10 px-8 py-3 rounded-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="resume-card glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:kaushik2005m@gmail.com" className="hover:text-primary transition-colors">kaushik2005m@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>8100610609</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a href="https://github.com/Kaushik2709" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/Kaushik2709</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a href="https://linkedin.com/in/Kaushik" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/Kaushik</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>India (Remote)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="resume-card glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{edu.period}</span>
                      </div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="resume-card glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="resume-card glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Key Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="font-semibold text-lg text-primary mb-3">{group.title}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {group.skills.map((skill) => (
                          <div
                            key={skill}
                            className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center hover-glow"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
