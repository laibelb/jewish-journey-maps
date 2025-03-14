
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 sm:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-8 animate-slide-down opacity-0" style={{ animationDelay: '0.1s' }}>
              About Jewish Journeys
            </h1>
            
            <div className="space-y-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Jewish Journeys is an interactive historical mapping project that traces the diverse paths of Jewish migration, settlement, and cultural development across millennia. From the ancient Land of Israel to the far reaches of the global diaspora, our project visualizes the remarkable story of the Jewish people.
              </p>
              
              <div className="bg-secondary/50 border border-border/40 rounded-xl p-6">
                <h2 className="text-2xl font-serif font-medium mb-4">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our mission is to create an accessible, educational resource that illuminates the geographical dimensions of Jewish history. By mapping significant events, migrations, and cultural developments, we aim to deepen understanding of the complex forces that have shaped Jewish communities around the world.
                </p>
              </div>
              
              <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Interactive Timeline</h3>
                    <p className="text-foreground/70">Navigate through key periods of Jewish history, from ancient times to the modern era.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Geographical Mapping</h3>
                    <p className="text-foreground/70">Visualize the movement and settlement of Jewish communities across continents and through time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20V10M18 20V4M6 20v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Historical Context</h3>
                    <p className="text-foreground/70">Explore detailed information about pivotal events, cultural developments, and historical figures.</p>
                  </div>
                </li>
              </ul>
              
              <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Methodology</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our project combines geographical data with historical research to create accurate visualizations of Jewish movement and settlement patterns. We draw from academic sources, historical records, archaeological findings, and demographic studies to ensure the accuracy of our maps and timelines.
              </p>
              
              <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Future Development</h2>
              <p className="text-foreground/80 leading-relaxed">
                Jewish Journeys is an ongoing project. We continuously update and expand our content to include new research, additional historical periods, and more detailed regional information. We welcome feedback and suggestions from users to improve the accuracy and comprehensiveness of our resource.
              </p>
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

export default About;
