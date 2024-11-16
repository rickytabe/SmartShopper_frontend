import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define the categories with multiple images for each
const categories = [
  {
    name: 'Furniture',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1866150/pexels-photo-1866150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
  },
  {
    name: 'Electronics',
    images: [
      'https://i.pinimg.com/564x/26/ad/05/26ad050ba183d2ede31db55357343525.jpg',
      'https://i.pinimg.com/564x/35/b6/40/35b64057fa59d2f1c5b8a96f37f9ed71.jpg',
      'https://i.pinimg.com/564x/71/c7/a0/71c7a08d5b8a4dcb4afedd4713c28b98.jpg',
    ],
  },
  {
    name:'Education',
    images: [
      '',
      ''
    ]
  },
  {
    name: 'Fashion',
    images: [
      'https://example.com/fashion1.jpg',
      'https://example.com/fashion2.jpg',
      'https://example.com/fashion3.jpg',
    ],
  },
  {
    name: 'Home Decor',
    images: [
      'https://example.com/home-decor1.jpg',
      'https://example.com/home-decor2.jpg',
      'https://example.com/home-decor3.jpg',
    ],
  },
  {
    name: 'Sports and Outdoors',
    images: [
      'https://example.com/sports1.jpg',
      'https://example.com/sports2.jpg',
      'https://example.com/sports3.jpg',
    ],
  },
  {
    name: 'Beauty & Personal Care',
    images: [
      'https://example.com/beauty1.jpg', 
      'https://example.com/beauty2.jpg',
      'https://example.com/beauty3.jpg',
    ],
  },
  {
    name: 'Health & Wellness',
    images: [
      'https://example.com/health1.jpg',
      'https://example.com/health2.jpg',
      'https://example.com/health3.jpg',
    ],
  },
  {
    name: 'Automotive',
    images: [
      'https://example.com/automotive1.jpg',
      'https://example.com/automotive2.jpg',
      'https://example.com/automotive3.jpg',
    ],
  },
  {
    name: 'Toys and Games',
    images: [
      'https://example.com/toys1.jpg',
      'https://example.com/toys2.jpg',
      'https://example.com/toys3.jpg',
    ],
  },
  {
    name: 'Pet Supplies',
    images: [
      'https://example.com/pet1.jpg',
      'https://example.com/pet2.jpg',
      'https://example.com/pet3.jpg',
    ],
  },
  {
    name: 'Baby & Kids',
    images: [
      'https://example.com/baby1.jpg',
      'https://example.com/baby2.jpg',
      'https://example.com/baby3.jpg',
    ],
  },
  {
    name: 'Groceries and HouseHold Essentials',
    images: [
      'https://example.com/appliances1.jpg',
      'https://example.com/appliances2.jpg',
      'https://example.com/appliances3.jpg',
    ],
  },
  {
    name:'Gift Ideas',
    images: [
      'https://example.com/gift1.jpg',
      'https://example.com/gift2.jpg',
      'https://example.com/gift3.jpg',
    ],
  }
];

const FeaturedCategories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(
    categories.map(() => 0) // Initialize current index for each category
  );

  // Handle next image
  const handleNext = (categoryIndex: number) => {
    setCurrentIndex((prevState) =>
      prevState.map((item, index) =>
        index === categoryIndex ? (item + 1) % categories[categoryIndex].images.length : item
      )
    );
  };

  // Handle previous image
  const handlePrev = (categoryIndex: number) => {
    setCurrentIndex((prevState) =>
      prevState.map((item, index) =>
        index === categoryIndex
          ? (item - 1 + categories[categoryIndex].images.length) % categories[categoryIndex].images.length
          : item
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevState) =>
        prevState.map((item, index) => (item + 1) % categories[index].images.length)
      );
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-12 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="flex space-x-8 overflow-x-auto">
          {categories.map((category, categoryIndex) => (
            <Link to={`/category/${category.name}`} key={category.name}  className="flex-shrink-0 w-full max-w-xs bg-white hover:bg-blue-500 border-4 border-blue-500  rounded-lg shadow-lg p-6">
              <div className="relative">
                <img
                  src={category.images[currentIndex[categoryIndex]]}
                  alt={category.name}
                  className="rounded-lg shadow-lg w-full h-72 object-cover"
                />
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
                  onClick={() => handlePrev(categoryIndex)}
                >
                  ‹
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
                onClick={(e) => {
                    e.preventDefault();
                    handleNext(categoryIndex)}
                }
                >
                  ›
                </button>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
              <div className="flex justify-center mt-2">
                {category.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full ${
                      currentIndex[categoryIndex] === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
