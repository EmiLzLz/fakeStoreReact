import React from "react";

function Categories(props) {
  return (
    <header className="categories h-auto d-flex flex-column align-items-center py-4">
      <p className="w-100 m-0 fw-bold fs-2 text-center">Categories</p>
      <div className="categories-container w-100">
        <div className="categories-viewport d-flex justify-content-between gap-5 py-4 px-3">
          <button
            className="category fs-4 py-1"
            onClick={() => props.setPage("electronics")}
          >
            Electronics
          </button>
          <button
            className="category fs-4 py-1"
            onClick={() => props.setPage("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="category fs-4 py-1"
            onClick={() => props.setPage("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="category fs-4 py-1"
            onClick={() => props.setPage("women's clothing")}
          >
            Women's clothing
          </button>
        </div>
      </div>
    </header>
  );
}

export default Categories;
