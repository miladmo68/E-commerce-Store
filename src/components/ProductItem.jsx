import React from "react";

const ProductItem = ({ product, onAdd }) => {
  function handleAdd(id) {
    onAdd(id);
  }
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 hover:shadow-lg transition duration-300 h-full">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center flex-grow">
        <h2 className="font-bold text-lg mb-1">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-1 capitalize">
          {product.category}
        </p>
        <p className="text-gray-700 text-sm mb-2">
          {product.description.slice(0, 80)}...
        </p>
        <div className="font-semibold text-green-600 text-lg">
          💲{product.price}
        </div>
        <div className="text-yellow-500 text-sm">
          ⭐ {product.rating?.rate} ({product.rating?.count})
        </div>
      </div>

      {/* Buttons - pushed to bottom */}
      <div className="flex justify-between gap-2 mt-auto">
        <button
          className="flex-1 bg-emerald-500 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded transition duration-300"
          onClick={() => handleAdd(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
