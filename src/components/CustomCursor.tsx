import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    // Set initial position to prevent flashing
    gsap.set([cursorDot, cursorOutline], {
      x: -100,
      y: -100,
    });

    // Mouse move handler with smooth GSAP animation
    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Animate cursor dot with minimal delay
      gsap.to(cursorDot, {
        x: x - 4,
        y: y - 4,
        duration: 0.1,
        ease: "power2.out"
      });

      // Animate cursor outline with slight delay for smooth following effect
      gsap.to(cursorOutline, {
        x: x - 20,
        y: y - 20,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Click handlers
    const handleMouseDown = () => {
      setIsClicking(true);
      
      gsap.to(cursorDot, {
        scale: 0.5,
        duration: 0.2,
        ease: "power2.out"
      });
      
      gsap.to(cursorOutline, {
        scale: 1.5,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      
      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    // Hover handlers for interactive elements
    const handleMouseEnter = () => {
      setIsHovering(true);
      
      gsap.to(cursorDot, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(cursorOutline, {
        scale: 2,
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(cursorOutline, {
        scale: 1,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, [role="button"], .hover-cursor'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide cursor when leaving window
    const handleMouseLeaveWindow = () => {
      gsap.to([cursorDot, cursorOutline], {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const handleMouseEnterWindow = () => {
      gsap.to([cursorDot, cursorOutline], {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          willChange: 'transform',
        }}
      />
      
      {/* Cursor outline */}
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/50 rounded-full pointer-events-none z-[9998]"
        style={{
          willChange: 'transform',
          opacity: 0.5,
        }}
      />
      
      {/* Additional glow effect when hovering */}
      {isHovering && (
        <div
          ref={cursorOutlineRef}
          className="fixed top-0 left-0 w-16 h-16 bg-primary/10 rounded-full pointer-events-none z-[9997] blur-md"
          style={{
            willChange: 'transform',
            animation: 'pulse 2s infinite',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;