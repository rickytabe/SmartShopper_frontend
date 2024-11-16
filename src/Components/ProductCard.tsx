import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="product-card" key={id}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
