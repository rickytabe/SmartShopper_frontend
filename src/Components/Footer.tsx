import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">Smart Shopper</h2>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Shop</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </div>
        <p>&copy; 2024 Smart Shopper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
