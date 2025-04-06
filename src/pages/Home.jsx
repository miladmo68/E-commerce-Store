import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const Home = ({ onProducts }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data && data.length > 0) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  if (loading) {
    return <h3>Loading... ! Please wait</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  function handleAdd(id) {
    const addedProduct = products.find((item) => item.id === id);
    setcartProducts([...cartProducts, addedProduct]);
    // onProducts(addedProduct);
  }

  onProducts(cartProducts);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-200 p-3">
      <ProductCard products={products} onAdd={handleAdd} />
    </div>
  );
};

export default Home;
