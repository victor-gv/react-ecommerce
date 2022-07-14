import React from "react";
import { AiFillDelete } from "react-icons/ai"

function ProductItem({ id, img, title, price, subsdivactQuantity, quantity, addQuantity, removeProduct }) {
  return (
    <>
    <div className="cart__product">
      <div className="cart__product--row">
              <div className="cart__img"><img src={img} alt="" /></div>
                <div className="cart__name--row">
                  <span className="productItem__title">{title}</span>
                  <span className="productItem__price">{price}€</span>
                </div>
              <div className="buttons-container">
                <button
                  className="buttons-quantity"
                  onClick={() => {
                    subsdivactQuantity(id);
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

              <AiFillDelete  
                className="remove-btn"
                onClick={() => removeProduct(id)}
                />
    </div>
    </div>
    </>
  );
}

export default ProductItem;
