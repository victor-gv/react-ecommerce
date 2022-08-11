import React, { useContext } from "react";
import useFetch from "../../Hooks/useFetch";
import useSearch from "../../Hooks/useSearch";
import noResult from "../../../images/no-results.png";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import errorImg from "../../../images/error-404.png";
import ProductCard from "../../ProductCard/ProductCard";
import { searchContext } from "../../../context/searchContext";


function ClothesItems(props) {
  const { error, loading, products } = useFetch();
  const { filter } = useSearch();
  const searchCall = useContext(searchContext);

  let renderedProducts;

  return (
    <>
      <div className="title__row">
        <h2 className="products__title">
          {props.title}
        </h2>
      </div>
      <div className="products__container">
        {loading ? (
          <Spinner className="spinner" animation="border" variant="primary" />
        ) : null}
        {error ? (
          <>
            <img className="error-img" src={errorImg} alt="error message" />
          </>
        ) : null}
        {
          (renderedProducts = products
            .filter((product) => product.category === "Clothes")
            .filter((product) => {
              const match = product.title
                .toLowerCase()
                .includes(filter.toLowerCase());
              if (!filter) searchCall.setSearchCall(false);
              if (filter !== "") searchCall.setSearchCall(true);
              return match;
            })
            .map((product) => 
            (
              <ProductCard key={product.id}>
                <div data-card={product.id} className="card">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt={product.title} />
                    <h4 className="card__title">{product.title}</h4>
                    <span className="card__description">
                      {product.category}
                    </span>
                    <span className="card__shop__price">{product.price}€</span>
                  </Link>
                  <div className="card__shop">
                    <button
                      onClick={() => props.manageShare(product)}
                      className="card__shop__share">
                      <BsShareFill />
                    </button>
                    <button
                      fav-id={product.id}
                      onClick={() => props.manageFav(product)}
                      className="card__shop__fav"
                    >
                      <MdFavoriteBorder />
                    </button>
                    <button
                      data-id={product.id}
                      className="card__shop__action"
                      onClick={() => props.manageClick(product)}
                    >
                      <BsHandbagFill />
                    </button>
                  </div>
                </div>
              </ProductCard>
            )))
        }
        {renderedProducts.length === 0 && filter !== "" ? (
          <div id="emptySearch" className="empty-alert">
            <img src={noResult} alt="No found sticker" />
            <h4>No results found</h4>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ClothesItems;
