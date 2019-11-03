import React, { Component } from 'react';

import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.container}>
         <View>
            <Text>Home</Text>
         </View>
         
        
          
         
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
