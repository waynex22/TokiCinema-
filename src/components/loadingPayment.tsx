import React from 'react';

const LoadingPayment = ({isLoading}: {isLoading: boolean}) => {
  return (
    <>
      {isLoading ?
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-30 z-50">
          <div className="bg-transparent">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            <p className="mt-4 text-white text-lg font-semibold">Processing Payment...</p>
          </div>
        </div>
        : null 
      }
    </>
  );
};

export default LoadingPayment;
