import React, { Component } from 'react';
import { Text, View ,TextInput,Style,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class plant extends  Component {
render(){
    return(
        <View style={styles.container}>
            <View style={styles.top,{flexDirection:'row',alignItems:'center'}}>
                <Icon name='chevron-left' style={styles.user,{fontSize:20}} />
                <Text style={styles.colon,{fontSize:20,fontWeight:'bold',left:330}}>:</Text>
            </View>
            <Text style={styles.text}>Thousand of recies{"\n"} in one place !</Text>
            <View style={{flexDirection:'row'}}>
                        <Icon name='user-alt' style={styles.search} />
                    <TextInput style={styles.input}>
                    </TextInput>
                    <View style={styles.circle}></View>
            </View>
            <View style={styles.nav}>
                <Text style={styles.all,{color:'yellow'}}>All </Text>
                
                <Text style={styles.top}>Popular</Text>
                <Text style={styles.top}>Recent</Text>
                <Text style={styles.top}>Favourit</Text>
            </View>
            <Icon name='user-alt' style={styles.user} />
            <View style={styles.down}>
                <View style={styles.down_top}>
                   
                    <Text style={styles.vegetable,{color:'white',fontSize:25,margin:20}}>vegetable Salad</Text>
                    <View style={{flexDirection:'row',left:30,top:-16}}>
                        <Icon name='star' style={styles.star} />
                        <Icon name='star' style={styles.star} />
                        <Icon name='star' style={styles.star} />
                        <Icon name='star' style={styles.star} />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',top:-65,left:-10}}>
                        <View style={styles.circle2}></View>
                        <Text style={{margin:5}}>author{"\n"}Benda </Text>
                    </View>
               </View>
                <View style={{marginTop:-20,marginLeft:20}}>
                <Text>ingidrent</Text>
                <View style={{flexDirection:'row'}}>
                    
                    <Icon name='user-alt' style={styles.ing} />
                    <Text style={styles.ing_txt}>4 carrot </Text>
                    <Icon name='user-alt' style={styles.ing} />
                    <Text style={styles.ing_txt}>1 Eggplant </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Icon name='user-alt' style={styles.ing} />
                    <Text style={styles.ing_txt}>2 Egg </Text>
                    <Icon name='user-alt' style={styles.ing} />
                    <Text style={styles.ing_txt}>1 Salad </Text>
                    </View>
                    <TouchableOpacity style={{height:30,width:200,borderRadius:10,
                        backgroundColor:"orange",margin:20}}>
                        <View style={{justifyContent:"center",alignco:"center",flexDirection:"row"}}>
                        <Icon name='user-alt' style={styles.user} />        
                        <Text style={styles.btn}>Start Shopping</Text>
                        </View>
                    </TouchableOpacity>
                
            
           
            </View>
            </View>
        </View>
    );
}

}
const styles = StyleSheet.create({
    container:{
    flex:1,
    borderRadius:10,
    backgroundColor:'white'
    
},
text:{
    fontSize:30,
    marginTop:40,
    fontWeight:'bold'
},
input:{
    height:50,
    width:220,
    backgroundColor:'yellow',
    borderRadius:30,
    margin:20
},
circle:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:'yellow',
    margin:24
},nav:{
    flexDirection:'row',
    justifyContent:'space-around'
    
},
down:{
    height:280,
    width:'100%',
    borderRadius:20,
    marginTop:64,
    backgroundColor:'green'
},
star:{
    color:'yellow',
},
circle2:{
    height:50,
    width:50,
    margin:5,
    borderRadius:25,
    backgroundColor:'yellow'

},
ing:{
    fontSize:30
},
ing_txt:{
    fontSize:20
}
}
)