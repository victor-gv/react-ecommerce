import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai"

function ProductItem({ id, img, title, slug, price, substractQuantity, quantity, addQuantity, removeProduct }) {

  return (
    <>
    <div className="cart__product">
      <div className="cart__product--row">
              <Link to={`/product/${slug}`}>
                <div className="cart__img"><img src={img} alt="" /></div>
              </Link>
                <div className="cart__name--row">
                  <span className="productItem__title">{title}</span>
                  <span className="productItem__price">{price}€</span>
                </div>
              <div className="buttons-container">
                <button
                  className="buttons-quantity"
                  onClick={() => {
                    substractQuantity(id);
                  }}
                >
                  -
                </button>
                <span className="numberOfProducts">{quantity}</span>
                <button
                  className="buttons-quantity"
                  onClick={() => addQuantity(id)}
                >
                  +
                </button>
              </div>
              <div className="remove-btn">
              <AiFillDelete
                onClick={() => removeProduct(id)}
                />
              </div>
    </div>
    </div>
    </>
  );
}

export default ProductItem;
