
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Map3D from '../components/Map3D';
import { historicalPeriods, historicalEvents } from '../lib/mapData';

const Index = () => {
  const [activePeriod, setActivePeriod] = useState(historicalPeriods[0].id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      <main className="flex-1 py-16 px-6 sm:px-8" id="map-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Timeline */}
            <div className="lg:col-span-1">
              <Timeline 
                periods={historicalPeriods} 
                activePeriod={activePeriod} 
                onPeriodChange={setActivePeriod} 
              />
            </div>
            
            {/* Main Map Area */}
            <div className="lg:col-span-3 h-[calc(100vh-200px)] min-h-[500px] relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-sm rounded-xl animate-pulse">
                  <div className="text-center">
                    <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                    <p className="text-foreground/70">Loading historical data...</p>
                  </div>
                </div>
              ) : (
                <div className="glass-panel h-full rounded-xl animate-fade-in">
                  <div className="p-4 border-b border-border/40 flex items-center justify-between">
                    <h2 className="text-lg font-medium">
                      {historicalPeriods.find(p => p.id === activePeriod)?.title || 'Jewish Diaspora Map'}
                    </h2>
                    <div className="text-sm text-foreground/70">
                      {historicalPeriods.find(p => p.id === activePeriod)?.year || ''}
                    </div>
                  </div>
                  <div className="h-[calc(100%-57px)] bg-gradient-to-b from-background/5 to-background/20 rounded-b-xl">
                    <Map3D events={historicalEvents} activePeriod={activePeriod} />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Featured Insights Section */}
          <div className="mt-16 border-t border-border/40 pt-16">
            <h2 className="text-3xl font-serif font-medium text-center mb-12">
              Featured Insights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeaturedCard 
                title="The Babylonian Exile" 
                description="How the first major diaspora event transformed Jewish religious practice and communal organization."
                image="https://images.unsplash.com/photo-1542742580-21d560c2e31e?q=80&w=1953"
                period="586 BCE - 538 BCE"
              />
              <FeaturedCard 
                title="Sephardic Heritage" 
                description="Exploring the cultural, philosophical, and artistic contributions of Jews in medieval Spain."
                image="https://images.unsplash.com/photo-1594980796927-48d2f5851aae?q=80&w=1770"
                period="900 CE - 1492 CE"
              />
              <FeaturedCard 
                title="Mass Migration to America" 
                description="The journey of Eastern European Jews to the United States and their influence on American society."
                image="https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=1775"
                period="1880 CE - 1920 CE"
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-6 sm:px-8 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Jewish Journeys. All rights reserved.</p>
          <p className="mt-2">An educational resource for exploring Jewish history through geography.</p>
        </div>
      </footer>
    </div>
  );
};

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  period: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ title, description, image, period }) => {
  return (
    <div className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-accent mb-2">{period}</div>
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
        <button className="mt-4 text-primary text-sm font-medium flex items-center hover:text-primary/80 transition-colors">
          Read more
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;
