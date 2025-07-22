import { useState, useEffect } from 'react';
import type { Product } from '../../../types';
import { mockProducts } from '../../../utils/mockData';


export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        // In a real app, this would be an actual API call
        // const response = await fetch('/api/products');
        // const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
        setProducts(mockProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  return { products, loading, error, getProductById };
};