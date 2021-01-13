import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import { useFetch } from '../../hooks/useFetch';
import wait from 'waait';

const API_URL = 'https://fakestoreapi.com/products'

function Main(props) {

    const {data, loading, error} = useFetch(API_URL);

    if (loading){
        return (
        <SafeAreaView>
            <ActivityIndicator size="large" color="#0000ff" />
        </SafeAreaView>)
    }
    if(error){
        <SafeAreaView>
            <Text>ERROR</Text>
        </SafeAreaView>
    }

    return(
        <SafeAreaView>
            <FlatList 
                data={data}
                keyExtractor={(_,i) => i.toString()}
                renderItem={({item}) => <Text>{item.title}</Text>}
            />
        </SafeAreaView>
    );
}
export {Main}