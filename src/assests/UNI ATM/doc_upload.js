import React, { Component } from 'react';
import {Camera} from 'react-native-camera';
import { Text,TextInput,TouchableOpacity, View ,StyleSheet} from 'react-native';
//import ImagePicker from 'react-native-imagepicker';
//import CameraRollPicker from 'react-native-camera-roll-picker';


 class HelloWorldApp extends Component {
   state={
       name:["SLC:","+2:","Bachelor:","Master:","Citizenship:","Other:"]

   }
  
   
  render() {
    return (
      <View style={styles.container}>
          
          {this.state.name.map((items)=>{
              return(
                  
            <View style={styles.inner}>
            <Text style={styles.text}>{items}

            </Text>
            <TextInput
            placeholder={'import from .....'}
            style={{height:40,width:100,backgroundColor:'red',marginRight:20}}>
            </TextInput>
            <TouchableOpacity
            onPress={this.handeler}
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
            <Camera>
                ref={(cam)=>{
                    this.camera=cam
                }}
                style-{styles.view}
                aspect={Camera.constants.Aspect.fill}>
                    <Text
                    onPress={this.takepicture.blind(this)}>
                        [CAPTURE_image]

                    </Text>
            </Camera>

      </View>
    );
  }
  takepicture(){
      const option={}
      this.Camera.capture({metadata:option}).then((data)=>{
          console.log(data)
      }).catch((error)=>{
        console.log(data) 
      }
      )


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
    
},
text:{
    height:40,
    width:80,
    marginTop:10
}

})   
