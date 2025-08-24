import React from 'react';

const Footer = ({ priceData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      {/* Last Updated */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white rounded-lg shadow-md px-6 py-3">
          <p className="text-sm md:text-base text-gray-600">
            Last updated: <span className="font-semibold text-gray-800">
              {formatDate(priceData?.lastUpdated)}
            </span> at{' '}
            <span className="font-semibold text-gray-800">
              {formatTime(priceData?.lastUpdated)}
            </span>
          </p>
          {priceData?.updatedBy && (
            <p className="text-xs text-gray-500 mt-1">
              Updated by: {priceData.updatedBy}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center">
        <div className="text-sm text-gray-500">
          <p>© 2025 All Island Egg Producers Association</p>
          <p className="mt-1">www.aiepa.web.lk</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;