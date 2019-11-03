import React, { Component } from 'react';

import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.container}>
         <View>
        
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen22')}>
                <Text>Click</Text>
            </TouchableOpacity>
         </View>
         
        
          
         
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
  backgroundColor:'gold'
}})   
