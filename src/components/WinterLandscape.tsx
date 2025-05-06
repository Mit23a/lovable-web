
import React from 'react';

const WinterLandscape = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Sky with moon */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-purple-400">
        {/* Moon */}
        <div className="absolute top-40 right-40 w-32 h-32 bg-white rounded-full opacity-90 shadow-[0_0_40px_20px_rgba(255,255,255,0.3)]" />
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mountains in the distance */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 C150,50 350,150 500,100 C650,50 800,150 1000,100 C1150,60 1200,150 1200,150 L1200,300 L0,300 Z"
            fill="#c4b5fd"
            opacity="0.6"
          />
          <path
            d="M0,200 C100,150 300,200 400,180 C550,150 700,220 850,180 C1000,140 1200,200 1200,200 L1200,300 L0,300 Z"
            fill="#ddd6fe"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Foreground - snow and igloo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white opacity-90">
        {/* Igloo */}
        <div className="absolute bottom-10 left-[15%]">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="75" rx="40" ry="5" fill="#BCC1FF" opacity="0.5" />
            <path d="M60 15C77.6731 15 92 29.5482 92 47.5V75H28V47.5C28 29.5482 42.3269 15 60 15Z" fill="#E0E8FF" />
            <path d="M60 15C77.6731 15 92 29.5482 92 47.5V75H28V47.5C28 29.5482 42.3269 15 60 15Z" stroke="#BCC1FF" strokeWidth="1.5" />
            <path d="M53 75V60C53 56.6863 55.6863 54 59 54H61C64.3137 54 67 56.6863 67 60V75" fill="#B1B9FC" />
            
            {/* Add igloo blocks */}
            {[...Array(6)].map((_, i) => (
              <rect 
                key={i} 
                x={34 + i * 10} 
                y={27 + (i % 2) * 10} 
                width={12} 
                height={8} 
                rx={2} 
                fill="#F0F4FF" 
                stroke="#D4D9FF" 
                strokeWidth="0.5" 
              />
            ))}
            
            {[...Array(7)].map((_, i) => (
              <rect 
                key={i + 10} 
                x={32 + i * 10} 
                y={37 + (i % 2) * 10} 
                width={12} 
                height={8} 
                rx={2} 
                fill="#F0F4FF" 
                stroke="#D4D9FF" 
                strokeWidth="0.5" 
              />
            ))}
            
            {[...Array(8)].map((_, i) => (
              <rect 
                key={i + 20} 
                x={30 + i * 10} 
                y={47 + (i % 2) * 8} 
                width={12} 
                height={8} 
                rx={2} 
                fill="#F0F4FF" 
                stroke="#D4D9FF" 
                strokeWidth="0.5" 
              />
            ))}
            
            {[...Array(7)].map((_, i) => (
              <rect 
                key={i + 30} 
                x={32 + i * 10} 
                y={57 + (i % 2) * 8} 
                width={12} 
                height={8} 
                rx={2} 
                fill="#F0F4FF" 
                stroke="#D4D9FF" 
                strokeWidth="0.5" 
              />
            ))}
          </svg>
        </div>
      </div>
      
      {/* Add animated snow */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `snowfall ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Custom keyframes for the animation */}
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};

export default WinterLandscape;
