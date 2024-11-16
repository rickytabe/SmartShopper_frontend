import React from 'react';
import { Link } from 'react-router-dom';
import buyerIllustration from '../assets/BuyerImage.png'; 
import vendorIllustration from '../assets/VendorImage.png'; 


const SelectionPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-600 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-4xl">Welcome to Smart Shopper</h2>
          <p className="mt-4 text-lg text-gray-300">Are you a Buyer or a Vendor?</p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

          {/* Buyer Card */}
          <div className="relative overflow-hidden bg-white rounded-lg p-6 border-4 border-blue-500 
               shadow-md hover:shadow-lg transform transition duration-300 ease-in-out"> 
            <div className="rounded-lg bg-white p-6  transform transition duration-300 ease-in-out hover:scale-110"> 
              <img src={buyerIllustration} alt="Buyer" className="h-48 w-full object-contain" />
            </div>
            <div className="mt-6">
              <Link to="/registerBuyer" className="relative flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Regiter As Buyer <span>→</span>
              </Link>
            </div>
          </div>

          {/* Vendor Card (Similar changes for shadow and image zoom) */}
          <div className="relative bg-white overflow-hidden rounded-lg p-6 border-4 border-green-500 
               shadow-md hover:shadow-lg transform transition duration-300 ease-in-out"> 
            <div className="rounded-lg bg-white p-6  transform transition duration-300 ease-in-out hover:scale-110"> 
              <img src={vendorIllustration} alt="Vendor" className="h-48 w-full  object-contain" />
            </div>
            <div className="mt-6">
              <Link to="/registerVendor" className="relative flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Register As Vendor <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
