import React from "react";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import ProductCard from "../../ProductCard/ProductCard";

const ProductPageItem = ({ product, manageFav, manageClick }) => {
  return (
    //   <ProductCard key={product.id}>
    //   <div data-card={product.id} className="card">
    //       <img src={product.img} alt={product.title} />
    //           <h4 className="card__title">{product.title}</h4>
    //       <span className="card__description">Summer outfits</span>
    //           <span className="card__shop__price">{product.price}€</span>
    //     <div className="card__shop">
    //         <button className="card__shop__share"><BsShareFill /></button>
    //         <button
    //           fav-id = {product.id}
    //           onClick={() => manageFav(product)}
    //           className="card__shop__fav"
    //           >
    //           <MdFavoriteBorder />
    //         </button>
    //         <button
    //           data-id={product.id}
    //           className="card__shop__action"
    //           onClick={() => manageClick(product)}
    //         >
    //           <BsHandbagFill />
    //         </button>
    //     </div>
    //   </div>
    // </ProductCard>

    <div data-card={product.id} className="small-container single-product">
      <div className="row">
        <div className="product_img col-6">
          <img
            src={product.img}
            alt=""
            width="100%"
            id="ProductImg"
          />

          {/* <div className="small-img-row">
            <div className="small-img-col">
              <img
                src={product.img}
                alt={product.title}
                width="100%"
                className="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                src={product.img}
                alt={product.title}
                width="100%"
                className="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                src={product.img}
                alt={product.title}
                width="100%"
                className="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                src={product.img}
                alt={product.title}
                width="100%"
                className="small-img"
              />
            </div>
          </div> */}
        </div>
        <div className="col-6">
          <p>Home / Sneakers</p>
          <h1>{product.title}</h1>
          <h4>{product.price}€</h4>
          <select>
            <option>Select Size</option>
            <option>46</option>
            <option>45</option>
            <option>44</option>
            <option>43</option>
            <option>42</option>
          </select>


          <h3>
            Product Details
          </h3>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            accusamus soluta quasi illum, deserunt ut iste rem obcaecati
            inventore, est harum repellendus fuga velit odio sint officia
            corrupti eum perspiciatis.
          </p>
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
      </div>
    </div>
  );
};

export default ProductPageItem;
