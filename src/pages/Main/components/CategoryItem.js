import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {category_item_style} from '../components/styles'

const CategoryItem = ({category_item}) => {
    return( 
        <TouchableOpacity>
            <View style ={category_item_style.container}>
                <Text>{category_item}</Text>
            </View>
        </TouchableOpacity>
    )
}
export {CategoryItem};