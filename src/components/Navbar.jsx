import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Store</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
