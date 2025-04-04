import React from "react";
import CartItem from "../components/CartItem";
const CartPage = ({ products }) => {
  console.log(products);
  return (
    <div className="min-h-screen flex flex-col">
      {products && products.length > 0 ? (
        products.map((productItem) => <CartItem productItem={productItem} />)
      ) : (
        <div className="flex justify-center font-bold m-4 text-cyan-900">
          Cart is Empty! Please add product to your cart...
        </div>
      )}
    </div>
  );
};

export default CartPage;
