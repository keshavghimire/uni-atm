import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,ActivityIndicator,FlatList,TouchableOpacity} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            isloading=true,
            isdata=[]
        }
    }
    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json() )
        .then( (responsejson)=>{
                this.setState({
                    isloading:false,
                    isdata:responsejson
                })     
        });
    
    
    
    }
  render() {
      return(

        <View style={styles.container}>
        <ActivityIndicator size="large"></ActivityIndicator>

      </View>
      )
    
    }
  
}


const styles = StyleSheet.create({
container:{
  flex:1
}})   
