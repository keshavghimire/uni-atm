import React, { Component } from 'react';

import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.container}>
        
         
         <Text>goto screen2</Text>
       
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"red"
}
} 
)   
