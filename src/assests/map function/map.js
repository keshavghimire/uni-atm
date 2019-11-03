import React, { Component } from 'react';



import { Text, View ,StyleSheet,} from 'react-native';

 class HelloWorldApp extends Component {
    state={
        name:["keshav","kesha","ghimire","ghimire"]
    }
    
    
   
  render() {
    return (
      <View style={styles.container}>
          {this.state.name.map((item,index)=>{
             return(
                 <Text>{item}</Text>
             )
             
         }) 
         } 
        
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
    flex:1,
 
}})   
