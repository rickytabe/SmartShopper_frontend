import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">Get the latest updates on new products and upcoming sales</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 text-black rounded-l-md w-1/2" />
          <button className="bg-yellow-500 px-6 py-3 rounded-r-md">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
