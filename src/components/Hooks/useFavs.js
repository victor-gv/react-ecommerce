import { useEffect, useReducer } from "react";
import favsReducer from "../FavsPage/FavsReducer/FavsReducer";


const useFavs = () => {
//Manage fav function
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("favs")) || initialState;
};

const [favs, dispatch] = useReducer(favsReducer, initialState, init); // add init function to the useReducer hook to initialize the state

useEffect(() => {
  localStorage.setItem("favs", JSON.stringify(favs));
}, [favs]);

const manageFav = (id) => {
  const action = {
    type: "add to fav",
    payload: id,
  };
  dispatch(action);
};

const favorites = JSON.parse(localStorage.getItem("favs"));
const cart = JSON.parse(localStorage.getItem("cart"));

//function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way, even if the page is refreshed, the icon will indicate that the product is already in the cart.
useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.forEach((product) => {
      const cartIcon = document.querySelector(`[data-id="${product.id}"]`);
      if (cartIcon) cartIcon.classList.add("item__added__background");
    });
  }
}, [cart]);

//function to add the class fav__added__background to the fav icons when the products are rendered if they are already in favs. That way even if the page is refreshed, the icon will indicate that the product is already in the favs.
useEffect(() => {
  const favs = JSON.parse(localStorage.getItem("favs"));
  if (favs) {
    favs.forEach((fav) => {
      const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
      if (favIcon) favIcon.classList.add("fav__added__background");
    });
  }
}, [favorites]);

const removeHidden = () => {
  const footer = document.querySelector(".footer");
  if (footer) footer.classList.remove("hidden");
};

  return {
    favs, manageFav, removeHidden
  }
}

export default useFavs