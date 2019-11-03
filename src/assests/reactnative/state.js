import React, { Component } from 'react';
import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';

 class HelloWorldApp extends Component {
    
  state={
      btncolor: 'red',
      name:'keshav'

      
  }
  change=()=>{
      this.setState({
          name:this.state.name == "keshav"?"ram":"keshav",
          btncolor:this.state.btncolor == "red"?"blue":"red"
      })
   
    
  }
      

  
  render() {
    
    return (
      <View style={styles.container}>
         
         <Text>{this.state.name}</Text>
         
         <TouchableOpacity  style={[styles.button,{backgroundColor:this.state.btncolor}]}
          onPress={this.change}><Text>click me</Text>
          </TouchableOpacity>
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
    },
    button:{
        height:30,
        width:200
    }
    } 
    )   
    