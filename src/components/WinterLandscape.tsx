
import React from 'react';

const WinterLandscape = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-800">
      {/* Stars - small, medium, and large */}
      {Array.from({ length: 80 }).map((_, index) => (
        <div 
          key={`star-${index}`}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Brighter stars with glow effect */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div 
          key={`bright-star-${index}`}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 2 + 2}px`,
            height: `${Math.random() * 2 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`,
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.8)',
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: `${Math.random() * 4 + 3}s`
          }}
        />
      ))}
      
      {/* Moon */}
      <div className="absolute top-28 right-32">
        <div className="w-36 h-36 bg-white rounded-full opacity-90 shadow-[0_0_40px_10px_rgba(255,255,255,0.4)]"></div>
      </div>
      
      {/* Snow effect */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 70 }).map((_, index) => (
          <div 
            key={index}
            className="snow-particle absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 10 + 5}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `snowfall ${Math.random() * 10 + 8}s linear ${Math.random() * 5}s infinite`
            }}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes snowfall {
            0% {
              transform: translateY(-10px) translateX(0);
              opacity: 0.8;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh) translateX(20px);
              opacity: 0;
            }
          }

          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 0.9; }
            100% { opacity: 0.3; }
          }

          .snow-particle {
            filter: blur(0.5px);
          }
          
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
          
          .clip-path-triangle {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          }
        `}
      </style>
    </div>
  );
};

export default WinterLandscape;
