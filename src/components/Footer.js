import React from 'react';
import { getCurrentDate, getCurrentTime } from '../utils/dateHelpers';

const Footer = () => {
  return (
    <>
      {/* Last Updated */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white rounded-lg shadow-md px-6 py-3">
          <p className="text-sm md:text-base text-gray-600">
            Last updated: <span className="font-semibold text-gray-800">{getCurrentDate()}</span> at{' '}
            <span className="font-semibold text-gray-800">{getCurrentTime()}</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center">
        <div className="text-sm text-gray-500">
          <p>© 2025 All Island Egg Producers Association</p>
          <p className="mt-1">www.egg.lk</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;