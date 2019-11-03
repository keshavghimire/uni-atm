import React, { Component } from 'react';
import App from './src/assests/UNI ATM/camera'


import { Text, View ,StyleSheet} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.container}>
        <Text>keshav</Text>
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
