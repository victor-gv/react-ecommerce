import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const ProductRelated = () => {

  const { products } = useFetch();

  const location = useLocation();
  const mainProduct = location.state;

  return (
    <>
      {
        products
          /* Filtering out the product that is currently being viewed. */
          .filter(product => product.id !== mainProduct.id)
          /* Sorting the array randomly. */
          .sort(() => Math.random() - Math.random())
          /* Limiting the number of products to 4. */
          .slice(0, 4)
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
