import React from "react";
import "./ProductItem.css";

function ProductItem({ id, img, title, price, substractQuantity, quantity, addQuantity, removeProduct }) {
  return (
    <>
    <div className="cart__product">
            <div className="img-container">
            <img src={img} alt="" />
            </div>
    <div className="cart__product--info">
              <h3>{title}</h3>
              <h3>{price}€</h3>
              <div className="buttons-container">
                <button
                  className="buttons-quantity"
                  onClick={() => {
                    substractQuantity(id);
                  }}
                >
                  -
                </button>
                <div className="numberOfProducts">{quantity}</div>
                <button
                  className="buttons-quantity"
                  onClick={() => addQuantity(id)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-dark remove-btn"
                onClick={() => removeProduct(id)}
              >
                Remove
              </button>
    </div>
    </div>
    </>
  );
}

export default ProductItem;
