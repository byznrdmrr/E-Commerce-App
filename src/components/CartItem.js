import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {AddToCart} from './AddToCart';
import {Cart_item_style} from '../styles/Components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function CartItem({itemFavData, onLike}) {
  return (
    <TouchableWithoutFeedback>
      <View style={Cart_item_style.container}>
        <View style={Cart_item_style.imageContainer}>
          <Image
            style={Cart_item_style.image}
            source={{uri: itemFavData.image}}
            resizeMode="contain"
          />
        </View>
        <View style={Cart_item_style.contentContainer}>
          <View style={Cart_item_style.contentInnerContainerFirst}>
            <Text style={Cart_item_style.title}>{itemFavData.title}</Text>
            <TouchableOpacity>
              <Icon
                style={Cart_item_style.delete}
                name="delete-forever"
                color="red"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={Cart_item_style.priceContainer}>
            <AddToCart itemPrice={itemFavData.price} showButton={false} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
