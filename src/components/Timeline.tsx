
import React from 'react';

export interface TimelinePeriod {
  id: string;
  title: string;
  year: string;
  description: string;
}

interface TimelineProps {
  periods: TimelinePeriod[];
  activePeriod: string;
  onPeriodChange: (id: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ periods, activePeriod, onPeriodChange }) => {
  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border/40">
        <h3 className="text-lg font-medium">Historical Timeline</h3>
      </div>

      <div className="overflow-y-auto max-h-[calc(100vh-200px)] py-4 px-6 space-y-2">
        {periods.map((period, index) => (
          <TimelineItem 
            key={period.id}
            period={period}
            isActive={period.id === activePeriod}
            isLast={index === periods.length - 1}
            onClick={() => onPeriodChange(period.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  period: TimelinePeriod;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  period, 
  isActive, 
  isLast,
  onClick
}) => {
  return (
    <div 
      className={`timeline-item ${isLast ? 'border-l-0' : ''} cursor-pointer group`}
      onClick={onClick}
    >
      <div 
        className={`timeline-dot transform transition-all duration-300 ${
          isActive ? 'scale-150 bg-accent' : 'group-hover:bg-primary/70'
        }`}
      />
      <div className="pt-1">
        <div 
          className={`font-medium transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-primary group-hover:text-primary/80'
          }`}
        >
          {period.year}
        </div>
        <h4 
          className={`text-base font-serif font-medium mb-1 transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-foreground group-hover:text-foreground/80'
          }`}
        >
          {period.title}
        </h4>
        {isActive && (
          <p className="text-sm text-foreground/70 animate-fade-in">
            {period.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
