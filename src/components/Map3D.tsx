import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Trail, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Event } from './HistoricalEvent';
import InfoCard, { HistoricalInfo } from './InfoCard';

interface Map3DProps {
  events: Event[];
  activePeriod: string;
}

// Convert lat/lng to 3D sphere coordinates
const latLngToVector3 = (lat: number, lng: number, radius = 2) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

// Event marker component
const EventMarker: React.FC<{
  event: Event;
  active: boolean;
  onClick: () => void;
}> = ({ event, active, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Convert percentage coordinates to lat/lng (approximate)
  const lat = 90 - (event.coordinates[1] * 1.8); // Convert % to lat
  const lng = (event.coordinates[0] * 3.6) - 180; // Convert % to lng
  
  const position = latLngToVector3(lat, lng, 2.05);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (active) {
        meshRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.01) * 0.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} onClick={onClick}>
        <sphereGeometry args={[active ? 0.03 : 0.02, 8, 8]} />
        <meshBasicMaterial 
          color={active ? "#ffd700" : "#ff6b6b"} 
          transparent
          opacity={active ? 1 : 0.8}
        />
      </mesh>
      
      {active && (
        <Html distanceFactor={10}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg pointer-events-none whitespace-nowrap">
            <div className="text-xs font-medium text-foreground">{event.title}</div>
            <div className="text-[10px] text-foreground/70">{event.year}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

// Migration trail component (simplified to avoid R3F errors)
const MigrationTrail: React.FC<{
  fromEvent: Event;
  toEvent: Event;
  active: boolean;
}> = ({ fromEvent, toEvent, active }) => {
  // Temporarily disabled trails to fix R3F compatibility issues
  return null;
};

// Globe component
const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2, 64, 64]}>
      <meshStandardMaterial 
        color="#1a365d"
        transparent
        opacity={0.8}
        wireframe={false}
      />
    </Sphere>
  );
};

// Camera controller
const CameraController: React.FC = () => {
  const { camera } = useThree();
  
  React.useEffect(() => {
    camera.position.set(0, 0, 6);
  }, [camera]);

  return null;
};

const Map3D: React.FC<Map3DProps> = ({ events, activePeriod }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<HistoricalInfo | null>(null);

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

  const migrationPairs = useMemo(() => {
    const pairs: Array<{ from: Event; to: Event }> = [];
    filteredEvents.forEach(event => {
      if (event.originCoordinates) {
        const originEvent = {
          ...event,
          coordinates: event.originCoordinates
        };
        pairs.push({ from: originEvent, to: event });
      }
    });
    return pairs;
  }, [filteredEvents]);

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <CameraController />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        {/* Globe */}
        <Globe />
        
        {/* Migration trails */}
        {migrationPairs.map((pair, index) => (
          <MigrationTrail
            key={`trail-${index}`}
            fromEvent={pair.from}
            toEvent={pair.to}
            active={selectedEvent === pair.to.id}
          />
        ))}
        
        {/* Event markers */}
        {filteredEvents.map(event => (
          <EventMarker
            key={event.id}
            event={event}
            active={event.id === selectedEvent}
            onClick={() => handleEventClick(event)}
          />
        ))}
        
        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>

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
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 text-sm text-foreground/70">
        <div>🖱️ Drag to rotate</div>
        <div>🔍 Scroll to zoom</div>
        <div>📍 Click markers for details</div>
      </div>
    </div>
  );
};

export default Map3D;