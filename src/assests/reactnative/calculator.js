import React, { Component } from 'react';
import { Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';

 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculator}>
        <Text style={styles.calculatornumber}>11*12</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultnumber}>1234</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.number}>
            <View style={styles.row}>
              <TouchableOpacity><Text style={styles.btn}>7</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>8</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>9</Text></TouchableOpacity>
              
            </View>
            <View style={styles.row}>
              <TouchableOpacity><Text style={styles.btn}>4</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>5</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>6</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity><Text style={styles.btn}>1</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>2</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity><Text style={styles.btn}>.</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>0</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.btn}>=</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.operator}>
              <TouchableOpacity><Text style={styles.opn}>/</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.opn}>*</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.opn}>-</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.opn}>+</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
  flex:1
},
calculator:{
  height:'25%',
  backgroundColor:"red",
  flexDirection:"row",
  justifyContent:'flex-end',
  alignItems:"center"
},
result:{
  height:'15%',
  backgroundColor:"green",
  flexDirection:"row",
  justifyContent:'flex-end',
  alignItems:"center" 
},
calculatornumber:{
  
  color:'white',
  fontSize:40
  
},
resultnumber:{
  color:'white',
  fontSize:35

},
btn:{
  fontSize:50
},
buttons:{
   height:'70%',
  flexDirection:"row"
},
number:{
  height:'90%',
  width:'75%',
  backgroundColor:"yellow"
},
row:{
  flex:1,
  justifyContent:'space-around',
  alignItems:'center',
  flexDirection:"row",
  
  
},
operator:{
  width:'25%',
  height:'90%',
  backgroundColor:"black",
  flex:1,
  justifyContent:'space-around',
  alignItems:"center"
  
},
opn:{
  color:'white',
  fontSize:50
}
})


 