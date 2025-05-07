
import React from 'react';

const WinterLandscape = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-purple-800 to-purple-600">
      {/* Snow effect */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index}
            className="snow-particle absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 10 + 5}px`,
              opacity: Math.random() * 0.6 + 0.4,
              animation: `snowfall ${Math.random() * 10 + 8}s linear ${Math.random() * 5}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Moon */}
      <div className="absolute top-1/4 right-1/4">
        <div className="w-32 h-32 bg-white rounded-full opacity-90 blur-sm"></div>
      </div>
      
      {/* Dim stars */}
      {Array.from({ length: 30 }).map((_, index) => (
        <div 
          key={`star-${index}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`
          }}
        />
      ))}
      
      {/* Gentle hills at bottom */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f8fafc" fillOpacity="0.2" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Igloo at the bottom */}
      <div className="absolute bottom-10 right-1/4 transform translate-x-1/2">
        <div className="w-20 h-12 bg-white bg-opacity-80 rounded-t-full"></div>
        <div className="w-24 h-6 bg-white bg-opacity-80 rounded-b-full -mt-2 -ml-2"></div>
        <div className="w-6 h-6 bg-purple-900 bg-opacity-70 rounded-t-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Custom CSS for snow animation */}
      <style jsx>{`
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
          100% { opacity: 0.9; }
        }

        .snow-particle {
          filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
};

export default WinterLandscape;
