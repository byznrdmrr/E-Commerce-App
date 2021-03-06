import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Add_to_cart_style} from '../styles/Components';

function AddToCart({
  itemPrice,
  showButton = true,
  showQuantity = true,
  showPrice = true,
  onAddCart,
}) {
  const [count, setCount] = useState(1);

  const handleChangeCountIncrease = () => {
    setCount(count + 1);
  };
  const handleChangeCountDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAddToCart = () => {
    Snackbar.show({
      text: 'Item add to cart',
      duration: 5000,
      action: {
        text: 'Go to cart',
        textColor: 'green',
        onPress: () => {
          /* Do something. */
        },
      },
      backgroundColor: 'white',
      textColor: 'black',
    });
  };

  return (
    <View style={Add_to_cart_style.container}>
      {showButton && (
        <TouchableOpacity onPress={() => onAddCart()}>
          <Icon
            style={Add_to_cart_style.button}
            name="cart-plus"
            color="black"
            size={25}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export {AddToCart};
