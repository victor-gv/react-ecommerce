const favsReducer = ( initialState, action ) => {
    switch (action.type) {
      case 'add to fav':
        //if condictional no avoid adding a product that is already on the list
        const cardShopFav = document.querySelector(`[fav-id="${action.payload.id}"]`);
        if (!initialState.find((product) => action.payload.id === product.id)){
          cardShopFav.classList.add("fav__added");
            return [ ...initialState, action.payload ];
        } else {
          cardShopFav.classList.remove("fav__added");
          cardShopFav.classList.remove("fav__added__background");
          return initialState.filter( product => product.id !== action.payload.id );
        }
  
    //   case 'delete from fav':
    //     return initialState.filter( book => book.id !== action.payload )
  
      default:
        return initialState;
    }
  }
  
  export default favsReducer;