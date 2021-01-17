import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView, FlatList, Alert, Button} from 'react-native';
import {Loading, Error} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteItem} from './components';
import {useSelector} from 'react-redux';
import {useFetch} from '../../hooks/useFetch';

function Favorites() {
  const [localData, setLocalData] = useState([]);
  const favList = useSelector((state) => state.favorites);
  const renderFav = ({item}) => <FavoriteItem itemFavData={item} />;

  if (favList) {
    if (favList.loading) {
      return <Loading />;
    }
    if (favList.error) {
      return <Error />;
    }
  }

  const getStorageData = async () => {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    if (jsonValue != null) {
      const bakeToJason = JSON.parse([jsonValue]);
      setLocalData(bakeToJason);
    } else {
      <Error />
    }
  };

  // useEffect(() => {
    getStorageData();
  // }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={localData && localData}
        renderItem={renderFav}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Favorites};
