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

        <View style={main_items.productTextContentContainer}>
          <Text style={main_items.title}>{item.title}</Text>
          <View style={main_items.footer}>
            <Text style={main_items.price}>{item.price}</Text>

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
