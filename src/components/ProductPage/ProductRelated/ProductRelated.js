import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const ProductRelated = () => {

  const { products } = useFetch();

  return (
    <>
      {products.length > 0 &&
        products
          .sort(() => Math.random() - Math.random())
          .slice(0, 4)
          .map((product) => (
            <div key={product.id} className="col-4">
              <Link to="" state={product}>
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
