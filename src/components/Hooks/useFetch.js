import { useState, useEffect } from 'react'

const useFetch = () => {

    const url = "http://localhost:5000/products";

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setError(false);
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const products = await response.json();
          setProducts(products);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      };
      fetchData();
    }, [url]);

  return {
    products,
    error,
    loading
  }
}

export default useFetch