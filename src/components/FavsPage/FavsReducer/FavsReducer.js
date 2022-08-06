const favsReducer = ( initialState, action ) => {
  const cardShopFav = document.querySelector(`[fav-id="${action.payload.id}"]`);
    switch (action.type) {
      case 'add to fav':
        //if conditional to avoid adding a product that is already on the list
        if (!initialState.find((product) => action.payload.id === product.id)){
            cardShopFav.classList.add("fav__added");
            return [ ...initialState, action.payload ];
        } else {
          cardShopFav.classList.remove("fav__added");
          cardShopFav.classList.remove("fav__added__background");
          return initialState.filter( product => product.id !== action.payload.id );
        }

      case 'delete from fav':
        return initialState.filter( product => product.id !== action.payload.id );

      default:
        return initialState;
    }
  }

  export default favsReducer;