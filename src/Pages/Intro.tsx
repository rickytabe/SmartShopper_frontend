import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  "https://via.placeholder.com/1824x1080?text=Second+Image",
  "https://via.placeholder.com/1824x1080?text=Third+Image",
  // Add more images as needed
];

const Intro: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-blue-600">
      <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 h-screen w-screen">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#93C5FD" />
              <stop offset={1} stopColor="#3B82F6" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome to Smart Shopper.
            <br />
            Your one-stop shop for everything.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover a wide range of products from various vendors. Experience the convenience of shopping from home with fast and reliable delivery.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              to="/select-role"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-dark shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </Link>
            <Link to="/ProductDetails" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            alt="App screenshot"
            src={images[currentImageIndex]}
            width={1824}
            height={1080}
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
