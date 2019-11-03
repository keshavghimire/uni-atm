import React, { Component } from 'react';
import { Text, View ,StyleSheet,Button,TouchableOpacity,ScrollView} from 'react-native';


 class HelloWorldApp extends Component {
   
   
  render() {
    return (
        <View>

            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen22')}>
                <Text>Click</Text>
            </TouchableOpacity>
            </View>
    );
  }
}
export default HelloWorldApp

const styles = StyleSheet.create({
container:{
  flex:1,

}
} 
)   
