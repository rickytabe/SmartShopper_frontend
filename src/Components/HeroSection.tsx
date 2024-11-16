import React from 'react';


const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-80 sm:h-96 md:h-[32rem] text-white flex items-center relative"> 
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundRepeat: 'no-repeat',   
          backgroundPosition: 'center',  
          backgroundAttachment: 'fixed', 
          backgroundSize: 'cover', 
          filter: 'blur(2px) brightness(0.5)'
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10"> {/* z-10 for stacking */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
          Welcome To Your Smart Shop
        </h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">
          Shop smarter, not harder
        </p>
        <div className="flex justify-center">
          <input type="email" placeholder="Search For Your Favorite Products, Items, and More" className="p-3 text-black rounded-l-md w-1/2" />
          <button className="bg-blue-500 px-6 py-3 rounded-r-md">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
