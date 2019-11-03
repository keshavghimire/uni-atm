import React, { Component } from 'react';
import { Text, View ,Style,StyleSheet,Image} from 'react-native';



export default class plant extends  Component {
    render() {

    return ( 
        <View Style={styles.container}>
            <View style={styles.inner1}>
            <Text style={styles.text_name}>BBQ CRISPY CHICKEN</Text>
                <Text style={styles.serve}>we serve the best chicken</Text>
                <Text style={styles.value}>$7</Text>
                <Image
                style={styles.image}
                source={require('../assests/images/bacon.png')}/>
            </View>
            <View style={styles.inner2}>
            <Text style={styles.text_name}>BBQ CRISPY CHICKEN</Text>
            <Text style={styles.serve}>we serve the best chicken</Text>
            <Text style={styles.value}>$7</Text>
            <Image
                style={styles.image}
                source={require('../assests/images/bacon.png')}/>
            </View>
            <View style={styles.inner3}>
            <Text style={styles.text_name}>BBQ CRISPY CHICKEN</Text>
            <Text style={styles.serve}>we serve the best chicken</Text>
            <Text style={styles.value}>$7</Text>
            <Image
                style={styles.image}
                source={require('../assests/images/bacon.png')}/>
            </View>
            <View style={styles.inner4}>
            <Text style={styles.text_name}>BBQ CRISPY CHICKEN</Text>
            <Text style={styles.serve}>we serve the best chicken</Text>
            <Text style={styles.value}>$7</Text>
            <Image
                style={styles.image}
                source={require('../assests/images/bacon.png')}/>
            </View>

        </View>



    );
    }
} 
const styles = StyleSheet.create({
container:{
    flex:1
},
inner1:{
    height:'25%',
    backgroundColor:'#bd3e28',
    
},
inner2:{
    height:'25%',
    backgroundColor:'#623b2c',
    
},
inner3:{
    height:'25%',
    backgroundColor:'#d5b99e',
   
},
inner4:{
    height:'25%',
    backgroundColor:'#425f28',
    
},
image:{
    height:150,
    width:150,
    left:230,
    top:-130
    
},
text_name:{
    color:'white',
    fontSize:40,
    fontWeight:'bold',
    marginLeft:8
},
value:{
    color:'yellow',
    fontSize:30,
    fontWeight:'bold',
    marginLeft:30
},
serve:{
    color:'#a08070',
    fontSize:12,
    marginLeft:19
}


})