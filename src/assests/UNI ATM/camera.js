import React, { Component } from 'react';
import { RNCamera } from "react-native-camera"


import { Text, View ,StyleSheet} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.container}>
          <RNCamera style={{position:'absolute',left:0,right:0,top:0,bottom:0}} />
       
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
    flex:1,
  justifyContent:'center',
  alignItems:'center'
}})   
