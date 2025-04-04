import React from "react";
import ProductItem from "./ProductItem";

const ProductCard = ({ products, onAdd }) => {
  // console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products && products.length > 0
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} onAdd={onAdd} />
          ))
        : null}
    </div>
  );
};

export default ProductCard;
