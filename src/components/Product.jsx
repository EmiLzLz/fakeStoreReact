import React from "react";

function Product({ product }) {
  return (
    <div className="product border border-2 rounded overflow-hidden">
      <img
        src={product.image}
        alt={product.description}
        className="img-fluid"
      />

      <h1 className="fs-3 text-truncate p-2 m-0 bg-white">{product.title}</h1>
      <div className="description p-2 bg-white">
        <h3 className="p-1 fs-2">$ {product.price}</h3>
        <h4 className="p-1 fs-5">Rate: {product.rating.rate}</h4>
        <h4 className="p-1 fs-5">Count: {product.rating.count}</h4>
      </div>
      <div className="options w-100 row justify-content-center gap-4 p-2 m-0 bg-white">
        <button className="view button py-2 rounded fs-5 col-sm-12 col-md-6">View</button>
        <button className="add button py-2 rounded fs-5 col-sm-12 col-md-6">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
