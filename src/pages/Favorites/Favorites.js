import React, {useState, useEffect} from 'react';
import axios from "axios"
import {SafeAreaView, FlatList} from 'react-native';
import {Loading, Error} from '../../components';
import {FavoriteItem} from "./components"
import {useFetch} from '../../hooks/useFetch';
import {useSelector} from 'react-redux';

function Favorites() {
  const favList = useSelector((state)=> state.favorites)
   
  const renderFav = ({item}) => (
    <FavoriteItem itemFavData={item} />
  );

  if (favList.loading) {
    return <Loading />;
  }
  if (favList.error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={favList}
        renderItem={renderFav}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Favorites};
