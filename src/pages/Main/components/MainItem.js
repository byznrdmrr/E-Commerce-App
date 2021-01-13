import React from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import {main_items} from'./styles';

export function MainItem({item,onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={main_items.container}>
                <Image
                    style ={main_items.image}
                    source={{uri: item.image}}
                    resizeMode='contain'               
                />
                <View>
                    <Text style={main_items.title}>{item.title}</Text>
                    <Text style={main_items.price}>{item.price} $</Text>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}
