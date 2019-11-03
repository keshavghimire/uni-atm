 
import React ,{ Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import kes from './doc_upload';
import Eli from './eligi';
//import Eli from './eligi';


const App = createSwitchNavigator({
    
  
    Doc_Upload:kes,

    //Not:Not_Eig
    

},
{ initialRouteName:'Doc_Upload'}
);


export default createAppContainer(App);
