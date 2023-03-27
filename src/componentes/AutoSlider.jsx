import React, { useState, useEffect } from 'react';

const images = [
  'https://live.staticflickr.com/65535/52769220781_811b847521_h.jpg',
  'https://live.staticflickr.com/65535/52768683337_9d6d4ee68d_b.jpg',
  'https://live.staticflickr.com/65535/52769635265_c2e72eca80_b.jpg',
  'https://live.staticflickr.com/65535/52769635280_502299f861_b.jpg',
];
function ImageCarousel(){
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start justify-center h-fit pt-1">
      <img
        className="object-contain max-w-full max-h-ful mx-auto"
        src={images[currentIndex]}
        alt={` ${currentIndex}`}
      />
    </div>
  );
};

export default ImageCarousel;