import React, { useState } from "react";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/20/solid";

interface Product {
  name: string;
  imageUrl: string;
  price: string;
  discount: string;
  category: string;
  type: string;
  likes: number;
  vendor: string;
  rating: number;
}
// Updated categories and products
const categories = [
  {
    name: "Furniture",
    types: [
      "Sofas",
      "Chairs",
      "Tables",
      "Ottomans",
      "Beds",
      "Dressers",
      "Nightstands",
    ],
  },
  {
    name: "Electronics",
    types: ["Laptops", "Smartphones", "Televisions", "Cameras"],
  },
  {
    name: "Education",
    types: ["Books", "e-Learning Courses", "Stationery"],
  },
  {
    name: "Fashion",
    types: ["Men Clothing", "Women Clothing", "Accessories", "Shoes"],
  },
  {
    name: "Home Decor",
    types: ["Wall Art", "Mirrors", "Vases", "Rugs"],
  },
  {
    name: "Sports and Outdoors",
    types: ["Exercise Equipment", "Outdoor Gear", "Sportswear"],
  },
  {
    name: "Beauty & Personal Care",
    types: ["Skincare", "Makeup", "Haircare", "Fragrances"],
  },
  {
    name: "Health & Wellness",
    types: ["Supplements", "Fitness Equipment", "Medical Supplies"],
  },
  {
    name: "Automotive",
    types: ["Car Accessories", "Car Electronics", "Car Care"],
  },
  {
    name: "Toys and Games",
    types: ["Board Games", "Action Figures", "Educational Toys"],
  },
  {
    name: "Pet Supplies",
    types: ["Pet Food", "Pet Toys", "Pet Grooming"],
  },
  {
    name: "Baby & Kids",
    types: ["Baby Clothing", "Baby Gear", "Kids Toys"],
  },
  {
    name: "Groceries and Household Essentials",
    types: ["Food", "Beverages", "Cleaning Supplies"],
  },
  {
    name: "Gift Ideas",
    types: ["Gift Cards", "Gift Baskets", "Personalized Gifts"],
  },
];

const products: Product[] = [
  // Furniture Products
  {
    name: "Luxe Lounge Sofa",
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$235.99",
    discount: "-20%",
    category: "Furniture",
    type: "Sofas",
    likes: 0,
    vendor: "FurniCo",
    rating: 4.5,
  },
  {
    name: "Comfort Haven Sofa",
    imageUrl:
      "https://images.pexels.com/photos/2111120/pexels-photo-2111120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$250.99",
    discount: "-10%",
    category: "Furniture",
    type: "Sofas",
    likes: 0,
    vendor: "ComfortHome",
    rating: 4.0,
  },
  {
    name: "Round Wicker Chair",
    imageUrl:
      "https://images.pexels.com/photos/1162941/pexels-photo-1162941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$180.99",
    discount: "-25%",
    category: "Furniture",
    type: "Chairs",
    likes: 0,
    vendor: "WickerWorld",
    rating: 4.2,
  },
  {
    name: "Teal Ottoman",
    imageUrl:
      "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$125.99",
    discount: "-10%",
    category: "Furniture",
    type: "Ottomans",
    likes: 0,
    vendor: "OttomanArt",
    rating: 4.6,
  },
  {
    name: "Modern Glass Coffee Table",
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$199.99",
    discount: "-15%",
    category: "Furniture",
    type: "Tables",
    likes: 0,
    vendor: "GlassWorks",
    rating: 4.3,
  },
  // Electronics Products
  {
    name: "Ultra HD Smart TV",
    imageUrl:
      "https://i.pinimg.com/564x/26/ad/05/26ad050ba183d2ede31db55357343525.jpg",
    price: "$799.99",
    discount: "-10%",
    category: "Electronics",
    type: "Televisions",
    likes: 0,
    vendor: "ElectroVision",
    rating: 4.7,
  },
  {
    name: "Gaming Laptop",
    imageUrl:
      "https://i.pinimg.com/564x/35/b6/40/35b64057fa59d2f1c5b8a96f37f9ed71.jpg",
    price: "$1299.99",
    discount: "-12%",
    category: "Electronics",
    type: "Laptops",
    likes: 0,
    vendor: "GameTech",
    rating: 4.8,
  },
  {
    name: "4K Digital Camera",
    imageUrl:
      "https://i.pinimg.com/564x/71/c7/a0/71c7a08d5b8a4dcb4afedd4713c28b98.jpg",
    price: "$499.99",
    discount: "-18%",
    category: "Electronics",
    type: "Cameras",
    likes: 0,
    vendor: "CapturePro",
    rating: 4.5,
  },
  // Fashion Products
  {
    name: "Stylish Leather Jacket",
    imageUrl: "https://example.com/fashion1.jpg",
    price: "$89.99",
    discount: "-25%",
    category: "Fashion",
    type: "Men Clothing",
    likes: 0,
    vendor: "FashionHub",
    rating: 4.4,
  },
  {
    name: "Elegant Evening Gown",
    imageUrl: "https://example.com/fashion2.jpg",
    price: "$159.99",
    discount: "-20%",
    category: "Fashion",
    type: "Women Clothing",
    likes: 0,
    vendor: "GlamourGown",
    rating: 4.6,
  },
  {
    name: "Casual Sneakers",
    imageUrl: "https://example.com/fashion3.jpg",
    price: "$69.99",
    discount: "-30%",
    category: "Fashion",
    type: "Shoes",
    likes: 0,
    vendor: "SneakerWorld",
    rating: 4.3,
  },
  // Home Decor Products
  {
    name: "Abstract Wall Art",
    imageUrl: "https://example.com/home-decor1.jpg",
    price: "$45.99",
    discount: "-10%",
    category: "Home Decor",
    type: "Wall Art",
    likes: 0,
    vendor: "ArtisticVibes",
    rating: 4.1,
  },
  {
    name: "Vintage Mirror",
    imageUrl: "https://example.com/home-decor2.jpg",
    price: "$89.99",
    discount: "-15%",
    category: "Home Decor",
    type: "Mirrors",
    likes: 0,
    vendor: "VintageReflection",
    rating: 4.5,
  },
  {
    name: "Ceramic Flower Vase",
    imageUrl: "https://example.com/home-decor3.jpg",
    price: "$29.99",
    discount: "-20%",
    category: "Home Decor",
    type: "Vases",
    likes: 0,
    vendor: "CeramicCrafts",
    rating: 4.2,
  },
  // Sports and Outdoors Products
  {
    name: "Yoga Mat",
    imageUrl: "https://example.com/sports1.jpg",
    price: "$25.99",
    discount: "-10%",
    category: "Sports and Outdoors",
    type: "Exercise Equipment",
    likes: 0,
    vendor: "FitFlex",
    rating: 4.4,
  },
  {
    name: "Hiking Backpack",
    imageUrl: "https://example.com/sports2.jpg",
    price: "$49.99",
    discount: "-15%",
    category: "Sports and Outdoors",
    type: "Outdoor Gear",
    likes: 0,
    vendor: "OutdoorAdventure",
    rating: 4.6,
  },
  {
    name: "Running Shoes",
    imageUrl: "https://example.com/sports3.jpg",
    price: "$79.99",
    discount: "-20%",
    category: "Sports and Outdoors",
    type: "Sportswear",
    likes: 0,
    vendor: "RunFast",
    rating: 4.7,
  },
  // Beauty & Personal Care Products
  {
    name: "Facial Cleanser",
    imageUrl: "https://example.com/beauty1.jpg",
    price: "$15.99",
    discount: "-10%",
    category: "Beauty & Personal Care",
    type: "Skincare",
    likes: 0,
    vendor: "BeautyEssence",
    rating: 4.3,
  },
  {
    name: "Lipstick Set",
    imageUrl: "https://example.com/beauty2.jpg",
    price: "$25.99",
    discount: "-15%",
    category: "Beauty & Personal Care",
    type: "Makeup",
    likes: 0,
    vendor: "LipCharm",
    rating: 4.5,
  },
  {
    name: "Hair Dryer",
    imageUrl: "https://example.com/beauty3.jpg",
    price: "$35.99",
    discount: "-20%",
    category: "Beauty & Personal Care",
    type: "Haircare",
    likes: 0,
    vendor: "HairGlam",
    rating: 4.6,
  },
  // Health & Wellness Products
  {
    name: "Multivitamin Supplements",
    imageUrl: "https://example.com/health1.jpg",
    price: "$19.99",
    discount: "-10%",
    category: "Health & Wellness",
    type: "Supplements",
    likes: 0,
    vendor: "HealthBoost",
    rating: 4.4,
  },
  {
    name: "Treadmill",
    imageUrl: "https://example.com/health2.jpg",
    price: "$499.99",
    discount: "-15%",
    category: "Health & Wellness",
    type: "Fitness Equipment",
    likes: 0,
    vendor: "FitnessPro",
    rating: 4.8,
  },
  {
    name: "First Aid Kit",
    imageUrl: "https://example.com/health3.jpg",
    price: "$29.99",
    discount: "-20%",
    category: "Health & Wellness",
    type: "Medical Supplies",
    likes: 0,
    vendor: "SafetyFirst",
    rating: 4.5,
  },
  // Kids & Toys Products
  {
    name: "Building Blocks Set",
    imageUrl: "https://example.com/kids1.jpg",
    price: "$39.99",
    discount: "-10%",
    category: "Kids & Toys",
    type: "Educational Toys",
    likes: 0,
    vendor: "KidBuilders",
    rating: 4.7,
  },
  {
    name: "Stuffed Animal Toy",
    imageUrl: "https://example.com/kids2.jpg",
    price: "$15.99",
    discount: "-15%",
    category: "Kids & Toys",
    type: "Plush Toys",
    likes: 0,
    vendor: "CuddleFriends",
    rating: 4.6,
  },
  {
    name: "Remote Control Car",
    imageUrl: "https://example.com/kids3.jpg",
    price: "$49.99",
    discount: "-20%",
    category: "Kids & Toys",
    type: "Electronic Toys",
    likes: 0,
    vendor: "SpeedRacers",
    rating: 4.8,
  },
  // Pet Supplies Products
  {
    name: "Pet Bed",
    imageUrl: "https://example.com/pet1.jpg",
    price: "$25.99",
    discount: "-10%",
    category: "Pet Supplies",
    type: "Pet Beds",
    likes: 0,
    vendor: "PetComfort",
    rating: 4.5,
  },
  {
    name: "Dog Leash",
    imageUrl: "https://example.com/pet2.jpg",
    price: "$9.99",
    discount: "-15%",
    category: "Pet Supplies",
    type: "Pet Accessories",
    likes: 0,
    vendor: "LeashLand",
    rating: 4.4,
  },
  {
    name: "Cat Litter Box",
    imageUrl: "https://example.com/pet3.jpg",
    price: "$35.99",
    discount: "-20%",
    category: "Pet Supplies",
    type: "Litter Boxes",
    likes: 0,
    vendor: "KittyClean",
    rating: 4.6,
  },
  // Grocery Products
  {
    name: "Organic Honey",
    imageUrl: "https://example.com/grocery1.jpg",
    price: "$8.99",
    discount: "-10%",
    category: "Grocery",
    type: "Pantry Staples",
    likes: 0,
    vendor: "NatureSweet",
    rating: 4.3,
  },
  {
    name: "Whole Grain Pasta",
    imageUrl: "https://example.com/grocery2.jpg",
    price: "$4.99",
    discount: "-15%",
    category: "Grocery",
    type: "Pasta & Noodles",
    likes: 0,
    vendor: "PastaWorld",
    rating: 4.2,
  },
  {
    name: "Almond Milk",
    imageUrl: "https://example.com/grocery3.jpg",
    price: "$3.99",
    discount: "-20%",
    category: "Grocery",
    type: "Dairy Alternatives",
    likes: 0,
    vendor: "NutriMilk",
    rating: 4.1,
  },
  // Automotive Products
  {
    name: "Car Air Freshener",
    imageUrl: "https://example.com/automotive1.jpg",
    price: "$5.99",
    discount: "-10%",
    category: "Automotive",
    type: "Car Accessories",
    likes: 0,
    vendor: "AutoFresh",
    rating: 4.3,
  },
  {
    name: "GPS Navigation System",
    imageUrl: "https://example.com/automotive2.jpg",
    price: "$199.99",
    discount: "-15%",
    category: "Automotive",
    type: "Navigation Systems",
    likes: 0,
    vendor: "NavTech",
    rating: 4.6,
  },
  {
    name: "Car Vacuum Cleaner",
    imageUrl: "https://example.com/automotive3.jpg",
    price: "$29.99",
    discount: "-20%",
    category: "Automotive",
    type: "Car Cleaning",
    likes: 0,
    vendor: "CleanDrive",
    rating: 4.5,
  },
  // Books Products
  {
    name: "Mystery Novel",
    imageUrl: "https://example.com/books1.jpg",
    price: "$12.99",
    discount: "-10%",
    category: "Books",
    type: "Fiction",
    likes: 0,
    vendor: "BookWorld",
    rating: 4.4,
  },
  {
    name: "Science Textbook",
    imageUrl: "https://example.com/books2.jpg",
    price: "$59.99",
    discount: "-15%",
    category: "Books",
    type: "Educational",
    likes: 0,
    vendor: "EduBooks",
    rating: 4.7,
  },
  {
    name: "Recipe Book",
    imageUrl: "https://example.com/books3.jpg",
    price: "$19.99",
    discount: "-20%",
    category: "Books",
    type: "Cookbooks",
    likes: 0,
    vendor: "ChefPages",
    rating: 4.5,
  },
  // Garden & Outdoors Products
  {
    name: "Garden Hose",
    imageUrl: "https://example.com/garden1.jpg",
    price: "$29.99",
    discount: "-10%",
    category: "Garden & Outdoors",
    type: "Gardening Tools",
    likes: 0,
    vendor: "GreenThumb",
    rating: 4.2,
  },
  {
    name: "Outdoor Grill",
    imageUrl: "https://example.com/garden2.jpg",
    price: "$249.99",
    discount: "-15%",
    category: "Garden & Outdoors",
    type: "Outdoor Cooking",
    likes: 0,
    vendor: "GrillMaster",
    rating: 4.6,
  },
  {
    name: "Solar Garden Lights",
    imageUrl: "https://example.com/garden3.jpg",
    price: "$49.99",
    discount: "-20%",
    category: "Garden & Outdoors",
    type: "Lighting",
    likes: 0,
    vendor: "BrightPath",
    rating: 4.3,
  },
];

const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [selectedType, setSelectedType] = useState(categories[0].types[0]);

  const filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory && product.type === selectedType
  );

  const [productLikes, setProductLikes] = useState<{
    [productName: string]: number;
  }>(
    products.reduce(
      (acc, product) => ({ ...acc, [product.name]: product.likes }),
      {}
    )
  );

  const handleLikeToggle = (productName: string) => {
    setProductLikes((prevLikes) => ({
      ...prevLikes,
      [productName]:
        prevLikes[productName] + (productLikes[productName] ? -1 : 1), // Increment if not liked, decrement if liked
    }));
  };

  return (
    <section className="py-12 p-4 bg-blue-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl text-white font-bold">
            Trending products for you!
          </h2>
          <button className="bg-blue-600 text-white px-4  shadow-red-500  py-2 rounded-full text-sm">
            View All Products &rarr;
          </button>
        </div>
        <div className="flex space-x-4 mb-4 border-b overflow-x-auto border-gray-300">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`py-2 px-3 ${
                selectedCategory === category.name
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-white"
              }`}
              onClick={() => {
                setSelectedCategory(category.name);
                setSelectedType(category.types[0]); // Reset type to first in new category
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex space-x-4 overflow-auto mb-4">
          {categories
            .find((cat) => cat.name === selectedCategory)
            ?.types.map((type) => (
              <button
                key={type}
                className={`py-2 px-3 ${
                  selectedType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-lg relative"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.price}</p>
                <p className="text-gray-700 mb-2">{product.vendor}</p>{" "}
                {/* Displaying Vendor Name */}
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < Math.round(product.rating)
                            ? "fill-current"
                            : "fill-current text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L0.244 6.91l6.557-0.955L10 0l3.2 5.955 6.557 0.955-4.735 4.635 1.122 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating}
                  </span>{" "}
                  {/* Displaying Rating */}
                </div>
                <button className="bg-blue-600 text-white rounded-full p-2">
                  <ShoppingCartIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-center absolute top-4 right-4 bg-white rounded ">
                <button
                  onClick={() => handleLikeToggle(product.name)}
                  className="text-gray-500"
                >
                  <HeartIcon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      productLikes[product.name] ? "text-red-500" : ""
                    }`}
                  />
                </button>
                <span className="text-gray-500">
                  {productLikes[product.name] > 0
                    ? `${productLikes[product.name]} `
                    : ""}
                </span>
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
                {product.discount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
