import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView, FlatList, Alert, Button} from 'react-native';
import {Loading, Error} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteItem} from './components';
import {useSelector} from 'react-redux';

function Favorites() {
  const favList = useSelector((state) => state.favorites);

  const renderFav = ({item}) => <FavoriteItem itemFavData={item} />;

  if (favList.loading) {
    return <Loading />;
  }
  if (favList.error) {
    return <Error />;
  }

  const getData = async () => {
    const value = await AsyncStorage.getItem('@TESTFORTEST2');
    if (value !== null) {
      Alert.alert('data', value);
    }
  };

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
