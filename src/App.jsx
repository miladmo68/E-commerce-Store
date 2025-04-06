import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [cartProducts, setcartProducts] = useState([]);

  function handleProducts(newProducts) {
    // setcartProducts([newProducts, ...cartProducts]);
    // setcartProducts((prevCart) => [...prevCart, newProduct]);

    setcartProducts(newProducts);
  }

  // console.log(cartProducts);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onProducts={handleProducts} />} />
        <Route path="/cart" element={<CartPage products={cartProducts} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
