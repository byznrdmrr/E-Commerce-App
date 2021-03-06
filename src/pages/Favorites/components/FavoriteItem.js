import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Favorite_card_style} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

export function FavoriteItem({itemFavData}) {
  const dispatch = useDispatch()

  return (
    <TouchableWithoutFeedback>
      <View style={Favorite_card_style.container}>
        <View style={Favorite_card_style.imageContainer}>
          <Image
            style={Favorite_card_style.image}
            source={{uri: itemFavData.image}}
            resizeMode="contain"
          />
        </View>
        <View style={Favorite_card_style.contentContainer}>
          <View style={Favorite_card_style.contentInnerContainerFirst}>
            <Text style={Favorite_card_style.title}>{itemFavData.title}</Text>
            <TouchableOpacity onPress={() => dispatch({type: 'DELETE_FROM_FAV', payload: {itemFavData}})} >
              <Icon
                style={{alignSelf: 'flex-end', marginRight: 10}}
                name="heart"
                color="red"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={Favorite_card_style.contentInnerContainerSecond}>
            <Text style={Favorite_card_style.price}>{itemFavData.price} $</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
