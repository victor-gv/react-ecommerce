const cartReducer = (initialState, action) => {
  switch (action.type) {
    case "add to cart":
      if (!initialState.find((product) => action.payload.id === product.id)) {
        return [...initialState, action.payload];
      } else {
        return initialState.filter(
          (product) => product.id !== action.payload.id
        );
      }

    case "add quantity":
      return initialState.map((product) => {
        if (product.id === action.payload) {
          product.quantity++;
        }
        return product;
      });

    case "substract quantity":
      return initialState.map((product) => {
        if (product.id === action.payload) {
          product.quantity--;
        }
        return product;
      });

    case "remove product":
      return initialState.filter((product) =>{
        const cardShopAction = document.querySelector(`[data-id="${product.id}"]`);
        if (cardShopAction) cardShopAction.classList.remove("item__added");
        if (cardShopAction)
          cardShopAction.classList.remove("item__added__background");
        return product.id !== action.payload;
      }
      );

    default:
      return initialState;
  }
};



export default cartReducer;
