
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
      
      {/* Enhanced snowy landscape at the bottom */}
      <div className="absolute bottom-0 w-full">
        {/* Main snow hill with gradient */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-blue-100 rounded-t-[100%]"></div>
        
        {/* Secondary snow hills for depth */}
        <div className="absolute bottom-0 left-1/4 w-2/3 h-28 bg-gradient-to-t from-white to-blue-100 rounded-t-[100%] opacity-80"></div>
        <div className="absolute bottom-0 left-1/2 w-1/3 h-32 bg-gradient-to-t from-white to-blue-100 rounded-t-[100%] opacity-90"></div>
        
        {/* Distant mountain silhouettes */}
        <div className="absolute bottom-10 left-5 w-40 h-60 bg-indigo-900 rounded-t-[70%] opacity-50 transform -rotate-2"></div>
        <div className="absolute bottom-10 right-10 w-48 h-72 bg-indigo-900 rounded-t-[60%] opacity-40"></div>
        
        {/* Frozen lake in the distance */}
        <div className="absolute bottom-6 left-1/3 right-1/3 h-4 bg-cyan-200 rounded-full opacity-70"></div>
        
        {/* Snow-covered pine trees with new colors */}
        <div className="absolute bottom-20 left-1/4 flex space-x-8">
          {/* Pine tree 1 */}
          <div className="relative w-16 flex flex-col items-center">
            <div className="w-14 h-14 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-16 h-16 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-18 h-18 bg-emerald-800 clip-path-triangle relative">
              <div className="absolute top-0 left-0 right-0 h-5 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-3 h-6 bg-yellow-900 rounded-sm"></div>
          </div>
          
          {/* Pine tree 2 */}
          <div className="relative w-14 flex flex-col items-center mt-4">
            <div className="w-12 h-12 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-14 h-14 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-2 h-5 bg-yellow-900 rounded-sm"></div>
          </div>
        </div>
        
        {/* Snow-covered pine trees on the right */}
        <div className="absolute bottom-16 right-1/4 flex space-x-6">
          {/* Pine tree 3 */}
          <div className="relative w-12 flex flex-col items-center">
            <div className="w-10 h-10 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-12 h-12 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-2 h-4 bg-yellow-900 rounded-sm"></div>
          </div>
          
          {/* Pine tree 4 */}
          <div className="relative w-16 flex flex-col items-center mt-2">
            <div className="w-14 h-14 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-16 h-16 bg-emerald-800 clip-path-triangle mb-1 relative">
              <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-t-lg opacity-80"></div>
            </div>
            <div className="w-3 h-6 bg-yellow-900 rounded-sm"></div>
          </div>
        </div>
        
        {/* Some small bushes with snow */}
        <div className="absolute bottom-8 left-1/6 w-8 h-8 bg-emerald-900 rounded-full">
          <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-full opacity-90"></div>
        </div>
        <div className="absolute bottom-10 left-1/5 w-6 h-6 bg-emerald-900 rounded-full">
          <div className="absolute top-0 left-0 right-0 h-2 bg-white rounded-t-full opacity-90"></div>
        </div>
        
        {/* Small cluster of rocks */}
        <div className="absolute bottom-6 right-1/6 flex space-x-1">
          <div className="w-4 h-4 bg-gray-700 rounded-t-lg"></div>
          <div className="w-3 h-3 bg-gray-800 rounded-t-lg"></div>
          <div className="w-5 h-5 bg-gray-600 rounded-t-lg"></div>
        </div>
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
