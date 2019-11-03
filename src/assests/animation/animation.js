import React, { Component } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';



 class HelloWorldApp extends Component {
    constructor(props){
        super(props);
        this.state = {
          fadeValue: new Animated.Value(0),
        }
      }
      _fadeanimation=()=>{
          alert("animation ");
      }
   
  render() {
    return (
      <View style={styles.container}>
         <Animated.View style={[styles.animationView,{opacity:this.state.fadeValue}]}></Animated.View>
         <TouchableOpacity onPress={this._fadeanimation} style={styles.button}>
             <Text>animated</Text>
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
animationView:{
    height:100,
    width:100,
    backgroundColor:'red'
},
button:{
    height:30,
    width:150,
    backgroundColor:'blue'
}})   
