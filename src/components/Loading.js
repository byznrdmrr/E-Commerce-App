import React from 'react';
import {SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

export function Loading() {
    return(
        <SafeAreaView style ={{flex: 1, justifyContent: 'center', alignItems:'center' }}>        
            <LottieView 
                style = {{flex:1}}
                source = {require('../assets/loading.json')}
                autoPlay
            />          
        </SafeAreaView>
    );
    
}