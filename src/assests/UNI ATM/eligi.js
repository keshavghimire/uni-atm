import React, { Component } from 'react';


import { Text,TextInput,TouchableOpacity, View ,StyleSheet} from 'react-native';



 class HelloWorldApp extends Component {
   state={
       name:["SLC:","10+2:","Bachelor:","MAsters:","others:"]

   }
   
  render() {
    return (
      <View style={styles.container}>
          {this.state.name.map((items)=>{
              return(
                  
            <View style={styles.inner}>
            <Text style={{padding:10}}>{items}

            </Text>
            <TextInput
            placeholder={'import from .....'}
            style={{height:40,width:200,backgroundColor:'red',marginRight:20}}>
            </TextInput>
            <TouchableOpacity
            style={{height:40,width:90,backgroundColor:"blue",justifyContent:"center",alignItems:"center"}}>
                <Text>UPLOAD</Text>
            </TouchableOpacity>
          </View>

              )
          
          })}
          <TouchableOpacity
            style={{height:40,width:90,backgroundColor:"blue",justifyContent:"center",alignItems:"center"}}>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
    flex:1,
//   justifyContent:'center',
  alignItems:'center',
},
inner:{
    flexDirection:"row",
    margin:20
    
}

})   
