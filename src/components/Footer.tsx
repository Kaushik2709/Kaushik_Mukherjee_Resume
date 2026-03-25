import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kaushik2709', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Kaushik', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kaushik2005m@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Kaushik</h3>
            <p className="text-muted-foreground">
              Full Stack Developer building production-grade web and mobile applications
              with modern technologies.
            </p>
          </div>

          <div className="text-center space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Projects', 'Blog', 'Resume'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary text-center md:text-right">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary/20 hover:text-primary"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Kaushik Mukherjee
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
