import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { opacity: 0, y: 80, rotationX: 45 },
        {
          opacity: 1, y: 0, rotationX: 0,
          duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "AI Trip Planner",
      description: "Full-stack AI-powered travel planning app that generates personalized multi-day itineraries using Google Gemini 1.5 Flash with secure JWT auth and MongoDB storage.",
      tech: ["React (Vite)", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini AI", "JWT"],
      liveUrl: "https://aitripplanner-ypev.onrender.com",
      githubUrl: "https://github.com/Kaushik2709/AITripPlanner",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop"
    },
    {
      title: "TalkTuMe – Real-Time Chat",
      description: "Real-time full-stack chat app with Socket.io for instant messaging, JWT auth, Cloudinary image uploads, online/offline presence tracking, and Zustand state management.",
      tech: ["MERN Stack", "Socket.io", "JWT", "Cloudinary", "Zustand", "Tailwind CSS"],
      liveUrl: "https://fullstack-chatapp-1-cpf6.onrender.com",
      githubUrl: "https://github.com/Kaushik2709/FullStack_ChatApp",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&h=300&fit=crop"
    },
    {
      title: "API Client Lab",
      description: "Full-stack API testing platform for building, testing, and managing RESTful API requests with support for GET, POST, PUT, DELETE, PATCH, environment management, and syntax highlighting.",
      tech: ["React 18", "TypeScript", "Node.js", "Express", "MongoDB", "Shadcn UI"],
      liveUrl: "https://api-client-lab-1.onrender.com/",
      githubUrl: "https://github.com/Kaushik2709/API_Client_Lab",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop"
    },
    {
      title: "Fitness Tracker",
      description: "Full-stack fitness tracking mobile app with workout logging, AI-powered exercise guidance via Google Gemini, real-time dashboard, and Sanity CMS integration.",
      tech: ["React Native", "Expo", "Sanity CMS", "Clerk", "Gemini AI", "Zustand"],
      liveUrl: "https://github.com/Kaushik2709/Fitness_Tracker",
      githubUrl: "https://github.com/Kaushik2709/Fitness_Tracker",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&h=300&fit=crop"
    },
    {
      title: "Agomoni 2K25 – Event System",
      description: "Full-stack event management platform with QR-based food distribution, real-time admin verification, JWT authentication, and production deployment.",
      tech: ["MERN Stack", "JWT", "QR System", "Bcrypt"],
      liveUrl: "https://agomoni-2k25.onrender.com/",
      githubUrl: "https://github.com/Kaushik2709",
      image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=500&h=300&fit=crop"
    },
    {
      title: "ShopSee – E-Commerce Platform",
      description: "Responsive e-commerce platform with product filtering, sorting, category-based navigation, persistent shopping cart, and optimized reusable React components.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://beautiful-sprinkles-6af4bc.netlify.app/",
      githubUrl: "https://github.com/Kaushik2709/ShopSee",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-grade applications built with modern technologies across
            web, mobile, AI, and real-time domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card glass-card border-0 hover-glow group">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
