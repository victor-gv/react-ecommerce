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



  return {
    favs, manageFav
  }
}

export default useFavs