import React, { Component } from 'react';
import { Text, View ,StyleSheet,Button,TouchableOpacity,TextInput} from 'react-native';



 class HelloWorldApp extends Component {
   
   
  render() {
    return (
      <View style={styles.form}>
                    <Text style={styles.inp_txt}> EMAIL </Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.inp_txt}> PASSWORD </Text>
                    <TextInput style={styles.input}/>
                    
                    <Text style={styles.inp_txt}> PASSWORD </Text>
                    <TextInput style={styles.input}/>
                        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>>
                         <Text style={{color:'white'}}>Submit</Text>
                        </TouchableOpacity>
                      <Text style={styles.forget}>   FORGET YOUR PASSWORD?</Text>
                    </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
    form:{
        marginTop:-10
    },
    input:{
    height:30,
    width:200,
    borderRadius:10,
    backgroundColor:'#545e6a',
    fontWeight:"bold",
    marginBottom:10,
    
  },
  inp_txt:{
    color:'#545e6a',
    fontSize:13,
    fontWeight:"bold",
    marginLeft:5
  },
  forget:{
    width:'75%',
    alignSelf:"center",
    color:'#545e6a',
    fontSize:11,
    fontWeight:"bold",
    marginTop:11,
    borderBottomColor:'#545e6a',
    borderBottomWidth:2
  },
  btn:{ height: 35,
    width:140,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#04c582", 
    marginLeft:30
  }
} 
)   
