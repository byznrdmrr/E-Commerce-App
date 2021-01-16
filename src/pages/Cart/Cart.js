import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Loading, Error} from '../../components';
import {CartItem} from "./components"
import {useSelector} from 'react-redux'

function Cart() {
  const cartsList = useSelector((state)=> state.cartsList)

  const renderCart = ({item}) => (
    <CartItem itemCartData={item}/>
  );

  if (cartsList.loading) {
    return <Loading />;
  }
  if (cartsList.error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={cartsList}
        renderItem={renderCart}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Cart};
