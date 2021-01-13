import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import { useFetch } from '../../hooks/useFetch';
import wait from 'waait';
import { Loading, Error } from "../../components";

const API_URL = 'https://fakestoreapi.com/products'

function Main(props) {

    const {data, loading, error} = useFetch(API_URL);

    if (loading){
        return <Loading />;
    }
    if(error){
       return <Error />;

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