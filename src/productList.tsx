import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://smart-shoper-backend.onrender.com/api/products'); 
        setProducts(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li style={{backgroundColor:'wheat', borderRadius: 10, color:'black' }} key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} style={{ width: '750px', height: '500px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
