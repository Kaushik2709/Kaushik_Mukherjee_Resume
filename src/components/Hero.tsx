import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('resume');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero section-padding">
      <div className="container-custom">
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">
                  Kaushik
                </span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
              >
                Full Stack Developer with experience designing, building, and scaling
                production-grade web and mobile applications using React Native, React, Node.js, and MongoDB.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl hover-glow"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-primary/20 bg-transparent hover:bg-primary/10 px-8 py-3 rounded-xl"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              {['React', 'React Native', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <div
                  key={tech}
                  className="glass-card px-4 py-2 rounded-lg text-sm font-medium hover-glow"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profilePhoto}
                alt="Kaushik Mukherjee"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-primary"
              />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
