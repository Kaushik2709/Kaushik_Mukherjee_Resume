import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8, stagger: 0.1, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.about-text',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'React Native', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 96, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Zustand', level: 82, category: 'Frontend' },
    { name: 'DaisyUI', level: 80, category: 'Frontend' },
    { name: 'Shadcn UI', level: 78, category: 'Frontend' },
    { name: 'Node.js', level: 92, category: 'Backend' },
    { name: 'Express.js', level: 90, category: 'Backend' },
    { name: 'REST API Design', level: 92, category: 'Backend' },
    { name: 'JWT', level: 90, category: 'Backend' },
    { name: 'bcrypt', level: 82, category: 'Backend' },
    { name: 'Socket.io', level: 84, category: 'Backend' },
    { name: 'MongoDB', level: 90, category: 'Database & Data Layer' },
    { name: 'Mongoose', level: 88, category: 'Database & Data Layer' },
    { name: 'SQL', level: 82, category: 'Database & Data Layer' },
    { name: 'PostgreSQL', level: 78, category: 'Database & Data Layer' },
    { name: 'MVC', level: 90, category: 'Architecture & Patterns' },
    { name: 'RBAC', level: 86, category: 'Architecture & Patterns' },
    { name: 'Modular Design', level: 88, category: 'Architecture & Patterns' },
    { name: 'Scalable API Architecture', level: 90, category: 'Architecture & Patterns' },
    { name: 'WebSockets', level: 80, category: 'Architecture & Patterns' },
    { name: 'Git', level: 88, category: 'DevOps & Tools' },
    { name: 'Postman', level: 90, category: 'DevOps & Tools' },
    { name: 'Render', level: 82, category: 'DevOps & Tools' },
    { name: 'Vercel', level: 84, category: 'DevOps & Tools' },
    { name: 'Docker (Basics)', level: 70, category: 'DevOps & Tools' },
    { name: 'CI/CD Concepts', level: 75, category: 'DevOps & Tools' },
  ];

  const categories = [
    'Frontend',
    'Backend',
    'Database & Data Layer',
    'Architecture & Patterns',
    'DevOps & Tools'
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="about-text space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Kaushik Mukherjee — a Full Stack Developer with experience designing, building, and scaling 
                production-grade web and mobile applications using React Native, React, Node.js, and MongoDB.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                B.Sc. Computer Science (4-Year Honours) from the University of Calcutta. 
                Freelance Full Stack Developer since 2022, delivering real-world solutions across 
                e-commerce, finance, and event management domains.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strong foundation in system design fundamentals, RESTful API architecture, 
                authentication, authorization, and secure backend development. Proficient in 
                writing clean, maintainable, and scalable code following MVC and modular architecture patterns.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Full-stack web & mobile development (MERN + React Native)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Scalable RESTful API architecture & JWT authentication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Production deployment on Render & Vercel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Performance optimization & secure coding practices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">My Skills</h3>
            
            {categories.map((category) => (
              <div key={category} className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">{category}</h4>
                <div className="grid gap-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="skill-card glass-card p-4 rounded-xl hover-glow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
