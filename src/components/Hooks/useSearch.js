import React from 'react'

const useSearch = () => {

//Search function
const searchItem = () => {
    const search = document.getElementById("search").value;
    const products = document.querySelectorAll(".card");

    //Prevent refreshing the page when the user press enter key in the search bar
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    /* A function that filters the products and renders only the ones that match the search. */
    products.forEach((product) => {
      //We take into account only the title of the product and the price of the product, but not the text of the buy button to match the search.
      const title = product.querySelector(".card__title").innerText;
      const price = product.querySelector(".card__shop__price").innerText;
      const emptySearch = document.getElementById("emptySearch");

      if (
        title.toLowerCase().includes(search.toLowerCase()) ||
        price.includes(search)
      ) {
        product.style.display = "block";
        product.setAttribute("matched", "true");
      } else {
        product.style.display = "none";
        product.setAttribute("matched", "false");
      }

      const unMatchedProducts = document.querySelectorAll("[matched='false']");
      //If all the products have the attribute matched set to false, we toggle the display of the emptySearch div to display the message "No results found".
      if (unMatchedProducts.length === products.length) {
        emptySearch.classList.add("empty-alert");
        emptySearch.classList.remove("hidden");
      } else {
        emptySearch.classList.add("hidden");
        emptySearch.classList.remove("empty-alert");
      }
    });
  };


  return (
    {searchItem}
  )
}

export default useSearch