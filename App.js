import React, { Component } from 'react';
import { Text,TextInput,TouchableOpacity, View ,StyleSheet} from 'react-native';
import App from "./src/assests/UNI ATM/camera"


 class HelloWorldApp extends Component {
   
  render() {
    return (
      <View style={styles.container}>
        <App/>
          </View>
    
    
    
    
    
    )
 }};
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
    flex:1,
//   justifyContent:'center',
  alignItems:'center',
},
});
