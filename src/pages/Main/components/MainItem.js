import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddToCart} from '../../../components/AddToCart';
import {main_items} from './styles';

export function MainItem({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={main_items.container}>
        <Image
          resizeMode="contain"
          style={main_items.image}
          source={{uri: item.image}}
        />
        <TouchableOpacity /* onPress={onLike} */ style={main_items.favButton}>
          <Icon
            style={{alignSelf: 'flex-end'}}
            name="heart-outline"
            color="red"
            size={25}
          />
        </TouchableOpacity>
        <View style={main_items.productTextContentContainer}>
          <Text style={main_items.title}>{item.title}</Text>
          <View style={main_items.footer}>
            <Text style={main_items.price}>{item.price}</Text>
            <View>
              <AddToCart
                itemPrice={item.price}
                showPrice={false}
                showQuantity={false}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
