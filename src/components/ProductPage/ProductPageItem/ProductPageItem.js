import React from 'react'
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import ProductCard from '../../ProductCard/ProductCard';

const ProductPageItem = ({product, manageFav, manageClick}) => {


    
  return (
    <ProductCard key={product.id}>
    <div data-card={product.id} className="card">
        <img src={product.img} alt={product.title} />
            <h4 className="card__title">{product.title}</h4>
        <span className="card__description">Summer outfits</span>
            <span className="card__shop__price">{product.price}€</span>
      <div className="card__shop">
          <button className="card__shop__share"><BsShareFill /></button>
          <button
            fav-id = {product.id}
            onClick={() => manageFav(product)}
            className="card__shop__fav"
            >
            <MdFavoriteBorder />
          </button>
          <button
            data-id={product.id}
            className="card__shop__action"
            onClick={() => manageClick(product)}
          >
            <BsHandbagFill />
          </button>
      </div>
    </div>
  </ProductCard>
  )
}

export default ProductPageItem