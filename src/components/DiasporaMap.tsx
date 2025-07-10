import React, { useState, useEffect } from 'react';
import HistoricalEvent, { Event } from './HistoricalEvent';
import InfoCard, { HistoricalInfo } from './InfoCard';

interface DiasporaMapProps {
  events: Event[];
  activePeriod: string;
}

const DiasporaMap: React.FC<DiasporaMapProps> = ({ events, activePeriod }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<HistoricalInfo | null>(null);
  const [migrationPaths, setMigrationPaths] = useState<JSX.Element[]>([]);

  // Filter events based on the active period
  const filteredEvents = events.filter(event => event.periodId === activePeriod);

  useEffect(() => {
    // Generate migration paths when events or selected event changes
    generateMigrationPaths();
  }, [filteredEvents, selectedEvent]);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event.id);
    setShowInfo({
      id: event.id,
      title: event.title,
      description: event.description,
      year: event.year,
      location: event.location,
      image: event.image
    });
  };

  const generateMigrationPaths = () => {
    // Create paths between related events
    const paths: JSX.Element[] = [];
    
    // Find the selected event
    const mainEvent = filteredEvents.find(e => e.id === selectedEvent);
    
    if (mainEvent && mainEvent.originCoordinates) {
      // Draw a path from origin to destination
      const path = (
        <svg 
          key={`path-${mainEvent.id}`} 
          className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none"
        >
          <path
            d={`M ${mainEvent.originCoordinates[0]}% ${mainEvent.originCoordinates[1]}% Q ${
              (mainEvent.originCoordinates[0] + mainEvent.coordinates[0]) / 2
            }% ${
              Math.min(mainEvent.originCoordinates[1], mainEvent.coordinates[1]) - 10
            }%, ${mainEvent.coordinates[0]}% ${mainEvent.coordinates[1]}%`}
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-dash"
          />
          <circle 
            cx={`${mainEvent.originCoordinates[0]}%`} 
            cy={`${mainEvent.originCoordinates[1]}%`} 
            r="4" 
            fill="#FF6B6B" 
            opacity="0.7"
          />
        </svg>
      );
      paths.push(path);
    }
    
    // Show all migration paths for the period when no event is selected
    if (!selectedEvent) {
      filteredEvents.forEach(event => {
        if (event.originCoordinates) {
          const path = (
            <svg 
              key={`path-${event.id}`} 
              className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none"
            >
              <path
                d={`M ${event.originCoordinates[0]}% ${event.originCoordinates[1]}% Q ${
                  (event.originCoordinates[0] + event.coordinates[0]) / 2
                }% ${
                  Math.min(event.originCoordinates[1], event.coordinates[1]) - 10
                }%, ${event.coordinates[0]}% ${event.coordinates[1]}%`}
                stroke="#FF6B6B"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.4"
                className="animate-dash"
              />
            </svg>
          );
          paths.push(path);
        }
      });
    }
    
    setMigrationPaths(paths);
  };

  return (
    <div className="w-full h-full relative">
      <div className="map-container">
        {/* Base Map Image */}
        <div className="absolute inset-0 bg-secondary/20">
          <div className="absolute inset-0 bg-[url('/map-base.jpg')] bg-cover bg-center opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30"></div>
        </div>

        {/* Map Overlay with Migration Paths */}
        <div className="absolute inset-0">
          {/* Display migration paths */}
          {migrationPaths}

          {/* Events */}
          {filteredEvents.map(event => (
            <HistoricalEvent
              key={event.id}
              event={event}
              active={event.id === selectedEvent}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>

        {/* Map Controls - keeping existing controls */}
        <div className="map-controls absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg p-1 flex flex-col">
          <button 
            className="w-8 h-8 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
            aria-label="Zoom in"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21l-4.35-4.35M11 8v6M8 11h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
            aria-label="Zoom out"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21l-4.35-4.35M8 11h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
            aria-label="Reset view"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2v6h6M21 22v-6h-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12A9 9 0 007.8 7.8L3 12M21 12l-4.8 4.2A9 9 0 013 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <InfoCard 
          info={showInfo} 
          onClose={() => {
            setShowInfo(null);
            setSelectedEvent(null);
          }} 
        />
      )}
    </div>
  );
};

export default DiasporaMap;
