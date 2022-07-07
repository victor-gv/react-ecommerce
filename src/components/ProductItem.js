import React from "react";

function ProductItem({ id, img, title, price, substractProduct, quantity, addQuantity, totalPrice, reset}) {
  return (
    <>
      <div className="cart__product">
        <img src={img} alt="" />
        <div className="cart__product--info">
          <h3>{title}</h3>
          <h3>{price}€</h3>
          <div className="buttons-container">
            <button className="buttons-quantity" onClick={substractProduct}>
              -
            </button>
            <div className="numberOfProducts">{quantity}</div>
            <button className="buttons-quantity" onClick={() => addQuantity(id)}>
              +
            </button>
          </div>

          <button className="btn btn-dark" onClick={reset}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
