import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";
import Categories from "./Categories";


function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("");

  //*Peticion a la api
  useEffect(() => {
    async function apiStore() {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${page}`
      );

      const data = await response.json();
      setLoading(false);

      setProducts(data);
    }

    apiStore();
  }, [page]);

  return (
    <div className="container-fluid p-0">
      <Categories page={page} setPage={setPage} />

      {loading ? (
        <Loading />
      ) : (
        <div className="products row gap-4 justify-content-center h-auto py-5 m-0">
          {products.map((product) => {
            return (
              <div className="col-md-4 col-lg-3 d-flex justify-content-center" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
