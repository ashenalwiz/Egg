import React from 'react';

const Header = () => {
  return (
    <header className="w-full p-4 md:p-6">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <img 
            src="/images/aiepa-logo.png" 
            alt="AIEPA Logo" 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg"
            onError={(e) => {
              // Fallback if logo image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg" style={{display: 'none'}}>
            <span className="text-white font-bold text-xs md:text-sm text-center leading-tight">
              AIEPA<br/>LOGO
            </span>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;