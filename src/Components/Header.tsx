import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl md:text-3xl font-bold">Smart Shopper</div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>
        <div className="space-x-2 md:space-x-4">
          <button className="bg-yellow-500 px-2 py-1 md:px-4 md:py-2 rounded">Login</button>
          <button className="bg-yellow-500 px-2 py-1 md:px-4 md:py-2 rounded">Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
