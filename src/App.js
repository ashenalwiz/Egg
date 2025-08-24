import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PriceToggle from './components/PriceToggle';
import EggDisplay from './components/EggDisplay';
import Footer from './components/Footer';
import { fetchPrices } from './data/priceData';
import './App.css';

function App() {
  const [selectedView, setSelectedView] = useState('producer');
  const [priceData, setPriceData] = useState({
    producer: { white: 0, red: 0 },
    retail: { white: 0, red: 0 },
    lastUpdated: null,
    updatedBy: "Loading..."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPrices = async () => {
      try {
        const prices = await fetchPrices();
        setPriceData(prices);
      } catch (error) {
        console.error('Failed to load prices:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPrices();
    
    // Refresh prices every 5 minutes in case they change
    const interval = setInterval(loadPrices, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-yellow-200 rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 md:px-6 mt-4">
          <PriceToggle 
            selectedView={selectedView} 
            onViewChange={setSelectedView} 
          />

          {/* Price Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
              Price as of Today
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            {priceData.week && (
              <p className="text-sm text-gray-600 mt-2">{priceData.week}</p>
            )}
          </div>

          <EggDisplay 
            priceData={priceData} 
            selectedView={selectedView} 
          />

          <Footer priceData={priceData} />
        </main>
      </div>
    </div>
  );
}

export default App;