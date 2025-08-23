import React from 'react';

const PriceToggle = ({ selectedView, onViewChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-full shadow-lg p-2 flex">
        <button
          onClick={() => onViewChange('producer')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedView === 'producer'
              ? 'bg-orange-500 text-white shadow-md'
              : 'text-orange-500 hover:bg-orange-50'
          }`}
        >
          Producer
        </button>
        <button
          onClick={() => onViewChange('retail')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedView === 'retail'
              ? 'bg-orange-500 text-white shadow-md'
              : 'text-orange-500 hover:bg-orange-50'
          }`}
        >
          Retail
        </button>
      </div>
    </div>
  );
};

export default PriceToggle;