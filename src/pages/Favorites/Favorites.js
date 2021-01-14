// import React from 'react';
// import {SafeAreaView, Text, View} from 'react-native';

// function Favorites(props) {
//     return(
//         <SafeAreaView>
//             <Text>Favorites</Text>
//         </SafeAreaView>
//     );
// }
// export {Favorites}

import React, {useState, useEffect} from 'react';
import axios from "axios"
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {FavoriteItem, Loading, Error} from '../../components';
import {useFetch} from '../../hooks/useFetch';
import {useSelector} from 'react-redux';

function Favorites(props) {
  // const favlist = useSelector((state) => state.favorites);

  // const favlist = useFetch(
  //   `https://fakestoreapi.com/products/category/jewelery`,
  // );
  const [favData, setFavData] = useState([]);
  const productData = useFetch(`https://fakestoreapi.com/products/1`);

  useEffect(() => {
    if (productData.data) {
      axios
        .get(
          `https://fakestoreapi.com/products/category/${productData.data.category}`,
        )
        .then((res) => {
          setFavData(res.data);
        });
    }
  }, [productData.data]);

  const renderSimilarProducts = ({item}) => (
    <FavoriteItem itemFavData={item} />
  );

  if (productData.loading) {
    return <Loading />;
  }
  if (productData.error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={favData}
        renderItem={renderSimilarProducts}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Favorites};
