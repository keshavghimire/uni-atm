import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,ActivityIndicator,FlatList,TouchableOpacity,ImageBackground} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isloading:true,
      data:[],
      
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) =>response.json())
    .then((responsejson) => {
      this.setState({
        isloading:false,
        data:responsejson.slice(0,10),
       
      })

    })
  }
 
 _renderiTEM=({item}) =>(
     <View style={styles.inner}>
       <ImageBackground source={require('./bg.jpg')} style={{height:300,
width:250}}>
       <View style={styles.img}>
             <Image source={{uri:item.url}}  style={{height:70,width:70}}/> 
          </View>
          <View style={styles.content}> 
              <Text>Roll: {item.id}</Text>
             <TouchableOpacity onPress={()=> alert(item.title)}>
                 <Text>description:{"\n"}{item.title}</Text>
             </TouchableOpacity>

             </View>
            
       </ImageBackground>
     </View>
     
    ) ;

  render() {
    if(this.state.isloading){
       
      return(

        <View style={styles.container}>
        <ActivityIndicator size="large"></ActivityIndicator>

      </View>
      )
     

    }else{
    return (
      <View style={styles.container}>
           
            
            <FlatList
            
                data={this.state.data}

                renderItem={this._renderiTEM}

                keyExtractor={(item, index)=>index}/>
            
         </View>
    
    );
    }
  }
}


const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  margin:20
},
inner:{

  height:300,
  width:250,
marginBottom:10
},
img:{
left:20,
top:20
},
content:{
  marginLeft:100,
  marginRight:20,
  marginTop:50

}
})   
