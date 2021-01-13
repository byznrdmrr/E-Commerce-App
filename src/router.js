import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Main, Favorites, Cart  } from "./pages";

const Tab = createBottomTabNavigator();

function Router() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="MainScreen"
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color}) =>
              generateIcon(focused, color, route),
              tabBarLabel: () => null,
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
                <Tab.Screen name="MainScreen" component={Main}/>
                <Tab.Screen name="FavoritesScreen" component={Favorites} />
                <Tab.Screen name="CartScreen" component={Cart} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
export default Router;

function generateIcon(focused, color, route) {
    let iconName;
  
    switch (route.name) {
      case 'MainScreen':
        iconName = focused ? 'book-open' : 'book-open-outline';
        break;
      case 'FavoritesScreen':
        iconName = focused ? 'star' : 'star-outline';
        break;
      case 'CartScreen':
        iconName = focused ? 'cart' : 'cart-outline';
        break;
  
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={30} />;
  }