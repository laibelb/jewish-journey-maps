
import React, { useState } from 'react';
import HistoricalEvent, { Event } from './HistoricalEvent';
import InfoCard, { HistoricalInfo } from './InfoCard';

interface DiasporaMapProps {
  events: Event[];
  activePeriod: string;
}

const DiasporaMap: React.FC<DiasporaMapProps> = ({ events, activePeriod }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<HistoricalInfo | null>(null);

  // Filter events based on the active period
  const filteredEvents = events.filter(event => event.periodId === activePeriod);

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

  return (
    <div className="w-full h-full relative">
      <div className="map-container">
        {/* Base Map Image */}
        <div className="absolute inset-0 bg-map-base">
          <div className="absolute inset-0 bg-[url('/map-base.jpg')] bg-cover bg-center opacity-70"></div>
        </div>

        {/* Map Overlay */}
        <div className="absolute inset-0">
          {/* Events */}
          {filteredEvents.map(event => (
            <HistoricalEvent
              key={event.id}
              event={event}
              active={event.id === selectedEvent}
              onClick={() => handleEventClick(event)}
            />
          ))}

          {/* Map paths representing migration routes could be added here */}
        </div>

        {/* Controls */}
        <div className="map-controls">
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
