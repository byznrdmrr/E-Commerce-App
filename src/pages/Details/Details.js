import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import {useFetch} from '../../hooks/useFetch';
import {ProductCard, AddToCart, Loading, Error} from '../../components';
import {Product_style} from '../../styles/Pages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Details(props) {
  const productVal = props.route.params;
  const dispatch = useDispatch(); //reducer'ı tetikleyecek yapı
  const [similarData, setSimilarData] = useState([]);
  const productData = useFetch(
    `https://fakestoreapi.com/products/${productVal.item.id}`,
  );

  useEffect(() => {
    if (productData.data) {
      axios
        .get(
          `https://fakestoreapi.com/products/category/${productData.data.category}`,
        )
        .then((res) => {
          setSimilarData(res.data);
        });
    }
  }, [productData.data]);

  const renderSimilarProducts = ({item}) => (
    <View style={Product_style.productItem}>
      <ProductCard
        style={Product_style.productItem}
        productItem={item}
        isAddToCartVisible={false}
      />
    </View>
  );

  if (productData.loading) {
    return <Loading />;
  }
  if (productData.error) {
    return <Error />;
  }

  const storeData = async (productVal) => {
    const favData = `${productVal.data.title}`
    await AsyncStorage.setItem('@FAVORITES', favData);
    console.log(favData);
    dispatch({type: 'ADD_TO_FAVORITE', payload: {productVal}});
  };

  return (
    <SafeAreaView style={Product_style.container}>
      <ScrollView>
        {productData.data ? (
          <>
            <ImageBackground
              resizeMode="contain"
              source={{uri: productData.data.image}}
              style={Product_style.image}>
              <View>
                <TouchableOpacity onPress={() => storeData(productData)}>
                  <Icon
                    style={{alignSelf: 'flex-end'}}
                    name="heart-outline"
                    color="red"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={Product_style.price}>
                  {productData.data.price} $
                </Text>
              </View>
            </ImageBackground>
            <View style={Product_style.contentContainer}>
              <Text style={Product_style.title}>{productData.data.title}</Text>
              <View style={Product_style.addToCart}>
                <AddToCart
                  itemPrice={productData.data.price}
                  onAddCart={() =>
                    dispatch({type: 'ADD_TO_CART', payload: {productVal}})
                  }
                />
              </View>
              <View style={Product_style.categoryContainer}>
                <Text style={Product_style.category}>Category: </Text>
                <Text>{productData.data.category}</Text>
              </View>
              <Text style={Product_style.discription}>
                {productData.data.description}
              </Text>
            </View>
            <View style={Product_style.similarItems}>
              <View style={Product_style.similarItemsBg}>
                <Text style={Product_style.similarProductsTitle}>
                  Similar Products
                </Text>
              </View>
              <FlatList
                horizontal
                data={similarData}
                renderItem={renderSimilarProducts}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </>
        ) : (
          <Text>Ooops! No Thing Found</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// TODO: Change This to "{Product}"
export {Details};
