import React, { Component } from 'react';
import { Text, View ,Style,StyleSheet,Image,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class plant extends  Component {
render(){
    return(
       
            <ImageBackground source={{uri:"https://cdn.britannica.com/s:700x450/17/83817-050-67C814CD/Mount-Everest.jpg"}} 
            style={styles.container} >
                 
                
                    <View style={styles.top}>
                        <Text style={styles.text}>keshav</Text>
                    </View>
                    <View style={styles.inner}></View>
               
               
           

            </ImageBackground>
       
    
      
);
}

}
const styles = StyleSheet.create({
    container:{
    height:'100%',
    width:'100%'
    },
    top:{
       
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        position:'absolute',
        zIndex:9999
       
    },
    inner:{
        backgroundColor:'red',
        height:'100%',
        width:'100%',
        opacity:0.3,

    },
  
        
        

    

}
)