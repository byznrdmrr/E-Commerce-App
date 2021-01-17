import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView, FlatList, Alert, Button} from 'react-native';
import {Loading, Error} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteItem} from './components';
import {useSelector} from 'react-redux';
import {useFetch} from '../../hooks/useFetch';

function Favorites() {
  const [localData, setLocalData] = useState();
  const [newData, setNewDate] = useState();
  const favList = useSelector((state) => state.favorites);
  const allProducts = useFetch(`https://fakestoreapi.com/products`);
  const renderFav = ({item}) => <FavoriteItem itemFavData={item} />;

  if (favList) {
    if (favList.loading) {
      return <Loading />;
    }
    if (favList.error) {
      return <Error />;
    }
  }

  if (allProducts.length > 0) {
    if (allProducts.loading) {
      return <Loading />;
    }
    if (allProducts.error) {
      return <Error />;
    }
  }

  const getStorageData = async () => {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    if (jsonValue != null) {
      setLocalData(jsonValue);
    } else {
      null;
    }
  };

  getStorageData();

  useEffect(() => {
    if (allProducts.data) {
      setNewDate(allProducts.data.filter((item) => item.id == localData));
    }
  }, [allProducts.data]);

  return (
    <SafeAreaView>
      <FlatList
        data={newData}
        renderItem={renderFav}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Favorites};
