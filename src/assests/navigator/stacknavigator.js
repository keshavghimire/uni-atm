 
import React ,{ Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import ScreenOne from './src/assests/navigator/screen1';
import Home from './src/assests/navigator/home'
import Screen2 from './src/assests/navigator/screen2'



const App = createSwitchNavigator({
 
    Screen:ScreenOne,
    Home11:Home,
    Screen22:Screen2,
    

},{ initialRouteName:'Home11'}
);


export default createAppContainer(App);
