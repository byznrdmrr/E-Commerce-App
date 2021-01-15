
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddToCart} from '../components/AddToCart';
import {Product_card_style} from '../styles/Components';

function ProductCard({productItem, isAddToCartVisible = true}) {
  return (
    <View style={Product_card_style.productItem}>
      <Image
        resizeMode="contain"
        style={{height: 120}}
        source={{uri: productItem.image}}
      />
      <View style={Product_card_style.productTextContentContainer}>
        <Text style={Product_card_style.productTextContent}>
          {productItem.title}
        </Text>
        <View style={Product_card_style.footer}>
          <Text style={Product_card_style.productTextPrice}>
            {productItem.price}
          </Text>
          <TouchableOpacity /* onPress={onLike} */>
            <Icon
              style={{alignSelf: 'flex-end'}}
              name="heart-outline"
              color="red"
              size={25}
            />
          </TouchableOpacity>
          <AddToCart
            // style={Favorite_card_style.addToCart}
            itemPrice={productItem.price}
            showPrice={false}
            showButton={false}
            showQuantity={false}
          />
        </View>
      </View>
    </View>
  );
}
export {ProductCard};
