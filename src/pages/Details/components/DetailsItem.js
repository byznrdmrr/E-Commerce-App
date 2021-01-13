import React from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {details_items} from'./styles';

export function DetailsItem({item}) {
    return (
        <TouchableWithoutFeedback>

            <View style={details_items.container}>
                <Image
                    style ={details_items.image}
                    source={{uri: item.image}}
                    resizeMode='contain'               
                />
                <View>
                    <Text style={details_items.title}>{item.title}</Text>
                    <Text style={details_items.price}>{item.price} $</Text>
                    <Text style={details_items.description}>{item.description}</Text>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}
