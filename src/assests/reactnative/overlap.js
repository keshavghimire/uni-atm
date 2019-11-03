import React, { Component } from 'react';
import { Text, View ,Style,StyleSheet,Image,ImageBackground,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class plant extends  Component {
render(){
    return(
       
        <View style={{flex: 1,flexDirection:'row', backgroundColor:'green', justifyContent:'center', alignItems:'center'}}>
        

        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <ActivityIndicator></ActivityIndicator>
        </View>

        <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',
         position:'absolute',backgroundColor:'rgba(0,0,0,0.7)',
         height:'100%',
         width:'100%'}}>
         
</View>
</View>
       
    
      
);
}

}
