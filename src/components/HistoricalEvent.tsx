
import React from 'react';

export interface Event {
  id: string;
  title: string;
  year: string;
  location: string;
  coordinates: [number, number];
  description: string;
  periodId: string;
  image?: string;
  originCoordinates?: [number, number]; // For migration paths
}

interface HistoricalEventProps {
  event: Event;
  onClick: () => void;
  active?: boolean;
}

const HistoricalEvent: React.FC<HistoricalEventProps> = ({ event, onClick, active = false }) => {
  return (
    <div 
      className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        active 
          ? 'w-6 h-6 bg-accent border-2 border-white shadow-lg cursor-pointer z-30' 
          : 'w-4 h-4 bg-primary opacity-80 hover:opacity-100 cursor-pointer z-10 hover:shadow-md'
      }`}
      style={{ 
        left: `${event.coordinates[0]}%`, 
        top: `${event.coordinates[1]}%` 
      }}
      onClick={onClick}
    >
      {active && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg px-2 py-1 z-30 whitespace-nowrap animate-fade-in w-max max-w-[250px]">
          <div className="text-xs font-medium">{event.title}</div>
          <div className="text-[10px] text-foreground/70">{event.year}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default HistoricalEvent;
