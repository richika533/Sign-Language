import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native';

 export default class Sign extends React.Component{
 constructor(props){
    super(props);

    console.log(this.props.navigation.getParam("image"))
  
  }
  render(){
    let images = {
        image_1: require("../assets/1(20).jpg"),
        image_2: require("../assets/1(21).jpg"),
        image_3: require("../assets/1(13).jpg"),
        image_4: require("../assets/1(14).jpg"),
        image_5: require("../assets/1(15).jpg"), 
        image_6: require("../assets/1(16).jpg"),
        image_7: require("../assets/1(17).jpg"),
        image_8: require("../assets/1(18).jpg"),
        image_9: require("../assets/gestureicons/1(19).jpg"),
        image_10: require("../assets/gestureicons/1(26).jpg"),
        image_11: require("../assets/gestureicons/1(12).jpg"),
        image_12: require("../assets/gestureicons/1(1).jpg"),
        image_13: require("../assets/gestureicons/1(2).jpg"),
        image_14: require("../assets/gestureicons/1(3).jpg"),
        image_15: require("../assets/gestureicons/1(4).jpg"),
        image_16: require("../assets/gestureicons/1(5).jpg"),
        image_17: require("../assets/gestureicons/1(27).jpg"),
        image_18: require("../assets/gestureicons/1(22).jpg"),
        image_19: require("../assets/1(23).jpg"),
        image_20: require("../assets/1(24).jpg"),
        image_21: require("../assets/1(25).jpg"),
        image_22: require("../assets/gestureicons/1(6).jpg"),
        image_23: require("../assets/gestureicons/1(7).jpg"),
        image_24: require("../assets/1(8).jpg"),
        image_25: require("../assets/1(9).jpg"),
        image_26: require("../assets/gestureicons/1(10).jpg"),
    }
    return(
      <View>
              <Text style={Styling.title}>Hand Gesture</Text>

    <TouchableOpacity style={{alignSelf: 'center', width: 70, height: 70, marginTop: 150}}>
       <Image
          source= {images[this.props.navigation.getParam("image")]}
          style= {{width: 100, height: 100}} />
    </TouchableOpacity>

    <TouchableOpacity style={{alignSelf: 'center', marginTop: 80}}
    onPress={()=>{this.props.navigation.navigate('Screen1')}}>
      <Image
         source= {require("../assets/gestureicons/back-arrow-key.png")}
         style= {{width: 60, height: 60}} />
    </TouchableOpacity>
    
       </View>  
    )
  }
}
const Styling = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
  },
  title: {
    color: 'pink',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'purple',
  },
});

