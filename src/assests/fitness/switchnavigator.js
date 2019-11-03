 
import React ,{ Component } from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
// import { createSwitchNavigator } from 'react-navigation-stack';
import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Login from './login';
import Reg from './home1';



const App = createSwitchNavigator({

    Login:Login,
    Home:Reg,
}
);


export default createAppContainer(App);
