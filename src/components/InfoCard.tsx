
import React from 'react';

export interface HistoricalInfo {
  id: string;
  title: string;
  description: string;
  year: string;
  location?: string;
  image?: string;
}

interface InfoCardProps {
  info: HistoricalInfo;
  onClose: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ info, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="info-card max-w-xl w-full mx-4 animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm font-medium text-accent/80">{info.year}</span>
            <h3 className="text-2xl font-serif font-medium">{info.title}</h3>
            {info.location && (
              <div className="flex items-center text-sm text-foreground/70 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {info.location}
              </div>
            )}
          </div>
          <button 
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {info.image && (
          <div className="mb-4 h-52 rounded-lg overflow-hidden">
            <img 
              src={info.image} 
              alt={info.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        <div className="prose prose-sm max-w-none">
          <p>{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
