import React, { useEffect } from "react";

const CartItem = ({ productItem, tPrice }) => {
  useEffect(() => {
    tPrice(parseFloat(productItem.price));
  }, [productItem.price]);

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm mb-3">
      {/* Product Image */}
      <div className="flex items-center gap-3">
        <img
          src={productItem.image}
          alt={productItem.title}
          className="w-12 h-12 object-contain"
        />
        {/* Product Info */}
        <div>
          <h3 className="font-medium text-sm">{productItem.title}</h3>
          <p className="text-xs text-gray-500 capitalize">
            {productItem.category}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="text-green-600 font-semibold text-sm whitespace-nowrap">
        💲{productItem.price}
      </div>
    </div>
  );
};

export default CartItem;
