import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const ProductRelated = () => {

  const { products } = useFetch();

  const location = useLocation();
  const mainProduct = location.state;

  const relatedProducts = useMemo(() => {
    return products
      .filter((product) => product.id !== mainProduct.id)
      .sort(() => Math.random() - Math.random())
      .slice(0, 4)
  }
    , [products]);

  return (
    <>
      {
        relatedProducts
          .map((product) => (
              <div key={product.id} className="col-4">
              <Link to={`/product/${product.id}`} state={product}>
                <img src={product.img} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.category}</p>
                <h5>{product.price}€</h5>
              </Link>
            </div>
          ))}
    </>
  );
};

export default ProductRelated;
