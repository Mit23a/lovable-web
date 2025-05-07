
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
      
      {/* Snow ground */}
      <div className="absolute bottom-0 w-full h-32 bg-white bg-opacity-30 rounded-t-full"></div>
      
      {/* Snowman */}
      <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2">
        {/* Bottom snowball */}
        <div className="w-24 h-24 bg-white rounded-full opacity-90 mx-auto"></div>
        {/* Middle snowball */}
        <div className="w-18 h-18 bg-white rounded-full opacity-90 mx-auto -mt-4"></div>
        {/* Head */}
        <div className="w-14 h-14 bg-white rounded-full opacity-90 mx-auto -mt-3 relative">
          {/* Eyes */}
          <div className="absolute w-2 h-2 bg-black rounded-full top-4 left-4"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full top-4 right-4"></div>
          {/* Carrot nose */}
          <div className="absolute w-6 h-2 bg-orange-500 rounded-full top-6 left-4 transform rotate-0"></div>
          {/* Smile */}
          <div className="absolute w-8 h-1 bg-black rounded-full top-9 left-3 transform rotate-12"></div>
        </div>
        {/* Arms */}
        <div className="absolute w-16 h-1 bg-brown-900 top-24 -left-10 transform rotate-45"></div>
        <div className="absolute w-16 h-1 bg-brown-900 top-24 -right-10 transform -rotate-45"></div>
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
        `}
      </style>
    </div>
  );
};

export default WinterLandscape;
