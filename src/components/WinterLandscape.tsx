
import React from 'react';

const WinterLandscape = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-blue-100 to-blue-300">
      {/* Snow effect */}
      <div className="absolute inset-0 z-10">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
      </div>
      
      {/* Mountains */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f8fafc" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Trees */}
      <div className="absolute bottom-20 left-10">
        <div className="w-20 h-30 flex flex-col items-center">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-green-800"></div>
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-green-700 -mt-5"></div>
          <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-green-600 -mt-5"></div>
          <div className="w-4 h-10 bg-brown-500 mt-2"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-20">
        <div className="w-20 h-30 flex flex-col items-center">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-green-800"></div>
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-green-700 -mt-5"></div>
          <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-green-600 -mt-5"></div>
          <div className="w-4 h-10 bg-brown-500 mt-2"></div>
        </div>
      </div>
      
      <div className="absolute bottom-16 left-1/2">
        <div className="w-20 h-30 flex flex-col items-center">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-green-800"></div>
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-green-700 -mt-5"></div>
          <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-green-600 -mt-5"></div>
          <div className="w-4 h-10 bg-brown-500 mt-2"></div>
        </div>
      </div>
      
      {/* Sun */}
      <div className="absolute top-10 right-20">
        <div className="w-16 h-16 bg-yellow-300 rounded-full shadow-lg shadow-yellow-200"></div>
      </div>
      
      {/* Cabin */}
      <div className="absolute bottom-20 left-1/3 transform -translate-x-1/2">
        <div className="w-40 h-20 bg-amber-800 rounded-sm"></div>
        <div className="w-48 h-16 bg-gray-800 -mt-16 -ml-4"></div>
        <div className="w-8 h-12 bg-yellow-100 mt-2 ml-16"></div>
      </div>
      
      {/* CSS for snow animation */}
      <style>
        {`
          .snow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 100% 15%, white 1px, transparent 0),
              radial-gradient(circle at 0% 50%, white 1px, transparent 0),
              radial-gradient(circle at 50% 85%, white 2px, transparent 0),
              radial-gradient(circle at 85% 70%, white 2px, transparent 0);
            background-size: 
              150px 150px,
              300px 300px,
              200px 200px,
              250px 250px;
            animation: snowfall 8s linear infinite;
          }
          
          .snow:nth-child(2) {
            background-position: 100px 50px;
            animation-duration: 12s;
          }
          
          .snow:nth-child(3) {
            background-position: 50px 100px;
            animation-duration: 15s;
            animation-delay: 1s;
          }
          
          @keyframes snowfall {
            0% {
              transform: translateY(-100px);
            }
            100% {
              transform: translateY(calc(100% + 100px));
            }
          }
        `}
      </style>
    </div>
  );
};

export default WinterLandscape;
