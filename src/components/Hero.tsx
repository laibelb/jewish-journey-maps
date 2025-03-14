
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 500, 0);
      const transform = `translateY(${scrollPosition * 0.4}px)`;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = transform;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary"
    >
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 py-16 z-10 text-center">
        <div className="animate-slide-down opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight mb-6">
            <span className="text-primary block">Mapping the</span>
            <span className="text-accent">Jewish Diaspora</span>
          </h1>
        </div>

        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Explore the historical journey of the Jewish people across centuries and continents — 
            from ancient beginnings to global diaspora.
          </p>
        </div>

        <div className="animate-zoom-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <a
            href="#map-section"
            className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
          >
            Explore the Map
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary/70"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
