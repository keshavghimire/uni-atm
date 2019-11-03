import React, { Component } from 'react';
import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
     <View style={styles.container}>
            <View style={styles.left}>
                <Text>mobile</Text>
            </View>
            <View style={styles.right}>
                <Text>mobile</Text>
            </View>

        
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
  height:50,
  width:200,
  
 
  flexDirection:'row',
  margin:50
},
left:{
    width:'50%',
    backgroundColor:'blue',
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    justifyContent:'center',
    alignItems:'center'
},
right:{
    width:'50%',
    backgroundColor:'red',
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    justifyContent:'center',
    alignItems:'center'
}
    
    

}

)   
