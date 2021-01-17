function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      const {productVal} = action.payload;
      const index = state.favorites.findIndex(
        (fav) => fav.id === productVal.data.id,
      );
      // var storedData;
      // const getData = async () => {
      //   const jsonValue = await AsyncStorage.getItem('@storage_Key');
      //   if (jsonValue != null) {
      //     storedData = JSON.parse(jsonValue);
      //   } else {
      //     null;
      //   }
      // };
      // getData();
      return index === -1
        ? {...state, favorites: [...state.favorites, productVal.data]} //eski fav verilerini kaydet ve gönderilen itemlerı kaydet
        : state;

    case 'ADD_TO_CART':
      const productVal2 = action.payload;
      const index2 = state.cartsList.findIndex(
        (fav) => fav.id === productVal2.productVal.item.id,
      );
      return index2 === -1
        ? {
            ...state,
            cartsList: [...state.cartsList, productVal2.productVal.item],
          }
        : state;

    case 'DELETE_FROM_CART':
      const {itemCartData} = action.payload;
      return {
        ...state,
        cartsList: state.cartsList.filter((item) => item.id != itemCartData.id),
      };

    case 'DELETE_FROM_FAV':
      const {itemFavData} = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id != itemFavData.id),
        // savedFavorites: [...state.savedFavorites, productVal.data.id]
      };

    default:
      return state;
  }
}

export default reducer;
