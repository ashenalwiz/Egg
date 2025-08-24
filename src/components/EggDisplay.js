import React from 'react';

const EggDisplay = ({ priceData, selectedView }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-8">
      {/* White Egg */}
      <div className="relative group">
        <div 
          className="w-40 h-52 md:w-48 md:h-60 bg-gradient-to-b from-gray-50 via-white to-gray-100 shadow-2xl flex flex-col items-center justify-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          style={{
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            border: '3px solid #f3f4f6'
          }}
        >
          <div className="absolute top-4 left-6 w-8 h-12 bg-white opacity-30 rounded-full transform -rotate-12"></div>
          <div className="text-center relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">White</h3>
            <div className="text-2xl md:text-3xl font-bold text-black">
              Rs. {priceData[selectedView].white}
            </div>
          </div>
        </div>
      </div>

      {/* Red Egg */}
      <div className="relative group">
        <div 
          className="w-40 h-52 md:w-48 md:h-60 bg-gradient-to-b from-orange-100 via-amber-200 to-orange-300 shadow-2xl flex flex-col items-center justify-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          style={{
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            border: '3px solid #fed7aa'
          }}
        >
          <div className="absolute top-4 left-6 w-8 h-12 bg-white opacity-40 rounded-full transform -rotate-12"></div>
          <div className="text-center relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Red</h3>
            <div className="text-2xl md:text-3xl font-bold text-black">
              Rs. {priceData[selectedView].red}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EggDisplay;