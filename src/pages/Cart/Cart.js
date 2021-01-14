import React, {useState, useEffect} from 'react';
import axios from "axios"
import {SafeAreaView, FlatList} from 'react-native';
import {CartItem, Loading, Error} from '../../components';
import {useFetch} from '../../hooks/useFetch';

function Cart() {
  const [cartData, setCartData] = useState([]);
  const productData = useFetch(`https://fakestoreapi.com/products/1`);

  useEffect(() => {
    if (productData.data) {
      axios
        .get(
          `https://fakestoreapi.com/products/category/${productData.data.category}`,
        )
        .then((res) => {
          setCartData(res.data);
        });
    }
  }, [productData.data]);

  const renderSimilarProducts = ({item}) => (
    <CartItem itemFavData={item} />
  );

  const test = (
    productData.data /* && productData.data.map(item => item.price) */
  )

  if (productData.loading) {
    return <Loading />;
  }
  if (productData.error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={cartData}
        renderItem={renderSimilarProducts}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Cart};
