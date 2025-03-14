
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-serif font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">Jewish</span>
          <span className="text-accent">Journeys</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" exact>Map</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/communities">Communities</NavLink>
        </nav>
        
        <button className="block md:hidden p-2 text-primary" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, exact, children }: NavLinkProps) => {
  const isActive = window.location.pathname === to || 
                  (!exact && window.location.pathname.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`transition-all text-sm font-medium py-1 border-b-2 ${
        isActive 
          ? 'text-primary border-primary' 
          : 'text-foreground/70 border-transparent hover:text-primary hover:border-primary/30'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
