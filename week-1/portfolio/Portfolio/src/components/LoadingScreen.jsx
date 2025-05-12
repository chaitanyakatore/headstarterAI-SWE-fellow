import React, { useState, useEffect } from 'react';
import sharinganVideo from '../assets/sharingan.mp4';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    if (isVideoEnded) {
      // Add a small delay before transitioning
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVideoEnded, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-32 h-32">
        <video
          autoPlay
          muted
          className="w-full h-full object-cover"
          onEnded={() => setIsVideoEnded(true)}
        >
          <source src={sharinganVideo} type="video/mp4" />
        </video>
        {isVideoEnded && (
          <div className="absolute inset-0 bg-black animate-fadeOut" />
        )}
      </div>
    </div>
  );
};

export default LoadingScreen; 