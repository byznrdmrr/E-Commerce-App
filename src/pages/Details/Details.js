import React from 'react';
import {SafeAreView, Text, FlatList, Image, SafeAreaView} from 'react-native';
import {Loading, Error} from '../../components'
import {DetailsItem} from './components'
import {useFetch} from '../../hooks/useFetch'

const API_URL = ('https://fakestoreapi.com/products/')

export function Details(props) {
    const {id} =props.route.params;
    console.log(id);

    const {data, loading, error} = useFetch(API_URL, {params: id})

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    const renderDetails =({item}) => <DetailsItem item={item} />
    return(
        <SafeAreView>
            <FlatList 
                keyExtractor={(_,i) => i.toString()}
                data={data}
                renderItem={renderDetails}
            />
        </SafeAreView>
    )
}



