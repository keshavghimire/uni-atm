import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View ,StyleSheet,TextInput, Button,TouchableOpacity} from 'react-native';


class ui extends Component {
  
   constructor(props){
     super(props);
     this.state = {
       initalState:0,
       btncolor:"white"
     }
     }
   
     _ONchange=(val)=>{
    //   this.setState({
    //       initalState:val,
    //       btncolor:"blue"
    //   })
     
    this.props.navigation.navigate('Home')
  }
   
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Icon name='user-alt' style={styles.user} />
            </View>
            <View style={styles.box}>
                <View style={styles.content}>
                  <View style={styles.log_reg}>
                    <TouchableOpacity onPress={() =>this._ONchange(0)} >
                    <Text style={[styles.login,{color:this.state.btncolor}]}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._ONchange(1)} >
                    <Text style={[styles.login,{color:this.state.btncolor}]}> Register </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.form}>
                    <Text style={styles.inp_txt}> EMAIL </Text>
                    <TextInput style={styles.input}/>
                    
                    <Text style={styles.inp_txt}> PASSWORD </Text>
                    <TextInput style={styles.input}/>
                        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
                         <Text style={{color:'white'}}>Submit</Text>
                        </TouchableOpacity>
                      <Text style={styles.forget}>   FORGET YOUR PASSWORD?</Text>
                    </View>
                    

                
                </View>
            </View>
            
          
        </View>
      );
    }
  }
  export default ui
  
  const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'#04c582',
    justifyContent:"center",
    alignItems:'center',
  
  },
  circle:{
    height:100,
    width:100,
    borderRadius:50,
    backgroundColor:'#545e6a',
    justifyContent:'center',
    alignItems:'center',
    zIndex:1, 
  },
  user:{
    fontSize:60,
    color:'#2e3138'
  },
  box:{
      height:350,
      width:250,
      backgroundColor:'#2e3138',
      zIndex:0,
      marginTop:-50,
      alignItems:'center',
      borderRadius:20
      
      
     },
     content:{
         marginTop:40
     },
  login:{
    width:100,
     
      fontSize:20,
      fontWeight:'bold',
      borderBottomColor:"white",
      borderBottomWidth:4,
      
      marginBottom:30,padding:10
      
  },
  log_reg:{
    flexDirection:'row',
    
  
  },
  input:{
    height:35,
    width:200,
    borderRadius:10,
    backgroundColor:'#545e6a',
    fontWeight:"bold",
    marginBottom:20,
    
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
    marginTop:15,
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
  