import React from 'react';
import { Provider } from 'react-redux';
import reducer from './reducer';
import initialState from './store';
import {createStore} from 'redux';

function MainProvider({children}){
    return(
        <Provider store={createStore(reducer,initialState)}>
            {children}
        </Provider>
    ); 
}
export default MainProvider;