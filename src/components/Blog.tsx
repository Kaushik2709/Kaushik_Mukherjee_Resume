import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card', 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const blogPosts = [
    {
      title: "Getting Started with MERN Stack Development",
      excerpt: "A comprehensive guide to building your first full-stack application using MongoDB, Express.js, React, and Node.js.",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop"
    },
    {
      title: "Advanced GSAP Animations in React",
      excerpt: "Learn how to create stunning animations and interactions using GSAP with React components for better user experience.",
      date: "January 8, 2024",
      readTime: "12 min read",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop"
    },
    {
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes and components.",
      date: "December 28, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "State Management in React: Redux vs Context",
      excerpt: "A detailed comparison of different state management solutions in React and when to use each approach.",
      date: "December 20, 2023",
      readTime: "10 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      title: "MongoDB Best Practices for Scalable Applications",
      excerpt: "Essential tips and techniques for designing efficient MongoDB schemas and optimizing database performance.",
      date: "December 12, 2023",
      readTime: "15 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop"
    },
    {
      title: "Modern JavaScript Features Every Developer Should Know",
      excerpt: "Explore the latest JavaScript features and how they can improve your code quality and development experience.",
      date: "December 5, 2023",
      readTime: "7 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Development", "Animation", "CSS", "React", "Database", "JavaScript"];

  return (
    <section id="blog" ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and knowledge about web development,
            programming, and the latest technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={`px-4 py-2 rounded-full transition-all ${
                category === "All" 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary/20 hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="blog-card glass-card border-0 hover-glow group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:underline"
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/10 px-8 py-3 rounded-xl"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;