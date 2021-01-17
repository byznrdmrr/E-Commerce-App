import AsyncStorage from '@react-native-async-storage/async-storage';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      const {productVal} = action.payload;
      const index = state.favorites.findIndex(
        (fav) => fav.id === productVal.item.id,
      );

      const addStoreFav = async (productValAsync) => {
        const localValue = await AsyncStorage.getItem('@storage_Key');
        const bakeToJson = localValue && JSON.parse(localValue);

        if (localValue != null && bakeToJson.length >= 1) {
          const oldObject = bakeToJson.filter(
            (item) => item.id === productValAsync.item.id,
          );

          if (oldObject.length === 0) {
            const jsonValue = JSON.stringify([
              ...bakeToJson,
              productValAsync.item,
            ]);
            await AsyncStorage.setItem('@storage_Key', jsonValue);
          }
        } else {
          const jsonValue = JSON.stringify([productValAsync.item]);
          await AsyncStorage.setItem('@storage_Key', jsonValue);
        }
      };
      addStoreFav(productVal);

      return index === -1
        ? {
            ...state,
            favorites: [...state.favorites, productVal.item],
          }
        : state; //eski fav verilerini kaydet ve gönderilen itemlerı kaydet

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

      const deleteStoreFav = async () => {
        const localValue = await AsyncStorage.getItem('@storage_Key');
        const bakeToJson = localValue && JSON.parse(localValue);

        if (localValue != null && bakeToJson) {
          if (bakeToJson.length >= 1) {
            const deletedFavs = JSON.stringify(
              bakeToJson.filter((item) => item.id != itemFavData.id),
            );
            await AsyncStorage.setItem('@storage_Key', deletedFavs);
          }
        }
      };
      deleteStoreFav();

      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id != itemFavData.id),
      };

    default:
      return state;
  }
}

export default reducer;
