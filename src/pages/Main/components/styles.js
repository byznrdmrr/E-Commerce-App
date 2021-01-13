import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');

const main_items = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'tomato',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image:{
        height: deviceSize.height/3,
        marginVertical: 10,
    },
    price:{
        fontWeight: 'bold',
        color: 'red',
    },


});

export {main_items}