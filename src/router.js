import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Main, Favorites, Cart, Details  } from "./pages";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return(
    <Stack.Navigator
        screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="MainScreen" component={Main}/>
      <Stack.Screen name="DetailScreen" component={Details} />
    </Stack.Navigator>
  ); 
}

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
              activeTintColor: '#ff6347',
              inactiveTintColor: 'gray',
            }}>
                <Tab.Screen name="MainStack" component={MainStack}/>
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
      case 'MainStack':
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