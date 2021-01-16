import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {AddToCart} from '../../../components/AddToCart';
import {Cart_item_style} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

export function CartItem({itemCartData}) {
  const dispatch = useDispatch()

  return (
    <TouchableWithoutFeedback>
      <View style={Cart_item_style.container}>
        <View style={Cart_item_style.imageContainer}>
          <Image
            style={Cart_item_style.image}
            source={{uri: itemCartData.image}}
            resizeMode="contain"
          />
        </View>
        <View style={Cart_item_style.contentContainer}>
          <View style={Cart_item_style.contentInnerContainerFirst}>
            <Text style={Cart_item_style.title}>{itemCartData.title}</Text>
            <TouchableOpacity onPress={() => dispatch({type: 'DELETE_FROM_CART', payload: {itemCartData}})}>
              <Icon
                style={Cart_item_style.delete}
                name="delete-forever"
                color="red"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={Cart_item_style.priceContainer}>
            <AddToCart itemPrice={itemCartData.price} showButton={false} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
