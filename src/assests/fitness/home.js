import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';


import { Text, View ,StyleSheet,ScrollView,ImageBackground,Image, TouchableOpacity,FlatList} from 'react-native';
const value=[
    {
       icon:'heart',
       number:173,
       text:"HEART",
       color:'#ff2279'
        
      },
    {
       icon:'fire-alt',
       number:170,
       text:"HEART ",
       color:"#ff842b"
        
      },
    {
       icon:'clock',
       number:723,
       text:"HEART",
       color:'#06aef8'
        
      },
    {
       icon:'trophy',
       number:823,
       text:"HEART",
       color:'#20c56a'
        
      }
];
const data=[
    {
        color:'red',
        text:'workout'
    }
]
        
        


class HelloWorldApp extends Component {
    
    Item=(item)=> {
        // console.log("ICON",title.icon)
        return (
          <View style={styles.item,{flexDirection:'row',margin:8,marginRight:40}}>
               <View style={styles.cic}>
                    <Icon name={item.icon} style={{color:item.color,fontSize:15}} />
               </View>
               
                <Text style={{color:item.color,fontSize:30}}>{item.number}</Text>
                <Text style={{color:'white',top:8}}>{item.text}</Text>

          </View>
        );
      }
              
    
  render() {
    return (
        <View style={styles.container}>
             <View style={styles.top}>  
                <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Icon name='arrow-left' style={styles.top_icon}/>
                    <View style={styles.circle}>
                    <Icon name='user-circle' style={styles.top_icon}/>
                        
                    </View>
                </View>
                <View style={{marginLeft:10,top:-5}}>
                    <Text style={{fontSize:20,color:'white'}}>
                        DAILY MOTIVATION
                    </Text>
                    <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>
                        DON'T QUITE!!
                    </Text>
                </View>
                <FlatList style={styles.flatList}
                data={value}
                renderItem={({ item }) => this.Item(item)}
                keyExtractor={item => item.id}
                numColumns={2}/>
      </View>
            <View style={styles.mid}>
               <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>POPULAR WORKOUTS
               </Text>
                <TouchableOpacity style={
                    {height:30,width:70,backgroundColor:'#091f12',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#3ab374',fontWeight:"bold"}}>SEE ALL</Text>
                </TouchableOpacity>


            </View>
            

            <ScrollView horizontal={true} style={styles.botton}>
             <View style={styles.inner}>
                <Image source={require('../fitness/b.png')} 
                style={{height:200,width:200,marginLeft:20,position:'absolute'}}></Image>
                    <Text style={{color:"white"}}>WORKOUTS</Text>
                    <Text style={{fontWeight:'bold',fontSize:20,left:60,color:"white"}}>PUSHUP</Text>
                   <View style={{flexDirection:'row'}}>
                    <Icon name='clock' style={{fontSize:15,marginRight:2}} />
                       <Text>45 minutes</Text>
                   </View>
                </View>
                <View style={styles.inner}>
                <Image source={require('../fitness/b.png')} 
                style={{height:200,width:200,marginLeft:20,position:'absolute'}}></Image>
                    <Text style={{color:"white"}}>WORKOUTS</Text>
                    <Text style={{fontWeight:'bold',fontSize:20,left:60,color:"white"}}>PUSHUP</Text>
                    <View style={{flexDirection:'row'}}>
                    <Icon name='clock' style={{fontSize:15,marginRight:2}} />
                       <Text>45 minutes</Text>
                   </View>
                   </View>
                   <View style={styles.inner}>
                <Image source={require('../fitness/b.png')} 
                style={{height:200,width:200,marginLeft:20,position:'absolute'}}></Image>
                    <Text style={{color:"white"}}>WORKOUTS</Text>
                    <Text style={{fontWeight:'bold',fontSize:20,left:60,color:"white"}}>PUSHUP</Text>
                   <View style={{flexDirection:'row'}}>
                    <Icon name='clock' style={{fontSize:15,marginRight:2}} />
                       <Text>45 minutes</Text>
                   </View>
                   </View>   
            <ImageBackground 
                style={styles.inner}
                 imageStyle={{ borderRadius: 20}}
                 source={require('../fitness/a.png')} >
                    <Text style={{color:"green"}}>WORKOUTS</Text>
                    <Text style={{fontWeight:'bold',fontSize:20,left:60,color:"red"}}>PUSHUP</Text>
                   <View style={{flexDirection:'row'}}>
                    <Icon name='clock' style={{fontSize:15,marginRight:2}} />
                       <Text>45 minutes</Text>
                   </View>
            </ImageBackground>
           
            

            </ScrollView>
            



       
        </View>
 
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
    height:'100%',
    width:'100%',
    backgroundColor:'#010001',
    alignItems:'center',
    flex:1

},
top:{
    height:'45%',
    width:'99%',
    backgroundColor:"#181718",
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15

},
circle:{
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    
},
flatList:{
    width:"90%",
    left:10,
    top:20,
    margin:10,
    borderRadius:20
},
top_icon:{ 
    color:'white',
    fontSize:30
},
cic:{
    height:30,
    width:30,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3b3a3b'
},
mid:{
    height:"10%",
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15
},
botton:{
    maxHeight:"44%",
    width:'90%',
   
   
},
inner:{
    height:240,
    width:250,
    borderRadius:30,
    backgroundColor:'green',
    margin:20,
    padding:10,
    justifyContent:'space-between',
    

},
image:{
    height:150,
    width:150,
}
})   
