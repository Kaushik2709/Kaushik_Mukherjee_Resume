import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Resume from './Resume';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    gsap.registerPlugin(ScrollTrigger);
    
    // Create smooth scroll effect
    const lenis = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    };

    // Add scroll-triggered animations for sections
    const sections = gsap.utils.toArray('.section-padding');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { 
          opacity: 0.8,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });

    // Parallax effect for hero section
    gsap.to('.hero-bg', {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: '#home',
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Resume />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;