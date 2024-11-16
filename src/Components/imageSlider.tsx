import React, { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://i.pinimg.com/564x/b3/7a/66/b37a66a9eeabbcd3e900ced1b4830532.jpg',
    alt: 'Create an Online Shop',
    name: 'Create an online Shop',
  },
  {
    src: 'https://i.pinimg.com/564x/0a/46/f7/0a46f7be107472a2bcbcfb509d2a57ae.jpg',
    alt: 'Your Shop is open 24h/7',
    name: 'Your Shop is open 24h/7',
  },
  {
    src: 'https://i.pinimg.com/564x/cc/91/38/cc913887035b2dcaa3a278f31f851062.jpg',
    alt: 'Get Costumers From Anywhere',
    name: 'Get Costumers From Anywhere',
  },
  {
    src: 'https://i.pinimg.com/564x/f1/1b/80/f11b801f35a28bd73e0b1e53ad2680fa.jpg',
    alt: 'Contact a Delivery Team',
    name: 'Contact a Delivery Team',
  },
  {
    src:"https://i.pinimg.com/564x/ed/7a/87/ed7a8703d1d5b666b457b9727de00362.jpg",
    name:"Your Shop's Analytic DashBoard",
    alt:"Analytic DashBoard"
    
  },
  {
    src:"https://i.pinimg.com/564x/ee/93/1a/ee931ac4e99b8a45efdf8913aedf210c.jpg",
    name:"Secure Payment into Your Account",
    alt:"Secure Payment into Your Account"
  },
  {
    src: 'https://i.pinimg.com/736x/f1/c7/1e/f1c71ed1586390fe809406f5b31038d7.jpg',
    alt: 'Enjoy Digital marketing',
    name: 'Enjoy Digital marketing',
  },
];

const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mt-9 w-full h-full"> {/* Make the slider fill the container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.src} className="flex-shrink-0 w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-md h-full w-full object-cover shadow-lg" 
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
      <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 py-2">
        {images[currentImageIndex].name}
      </div>
    </div>
  );
};

export default ImageSlider;
