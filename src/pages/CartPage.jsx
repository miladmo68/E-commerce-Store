import { useState } from "react";
import CartItem from "../components/CartItem";
const CartPage = ({ products }) => {
  const [toPrice, setToPrice] = useState(0);
  console.log(products);
  function handleTotalPrice(price) {
    setToPrice((prevPrice) => prevPrice + price);
  }
  console.log(toPrice);
  return (
    <div className="flex grid-rows-2">
      <div className="min-h-screen flex flex-col bg-gray-200 p-3">
        {products && products.length > 0 ? (
          products.map((productItem) => (
            <CartItem productItem={productItem} tPrice={handleTotalPrice} />
          ))
        ) : (
          <div className="flex justify-center font-bold m-4 text-cyan-900">
            Cart is Empty! Please add product to your cart...
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center text-xl font-semibold mb-4">
        <h1>Summary</h1>
        <div>💲 {toPrice}</div>
      </div>
    </div>
  );
};

export default CartPage;
