import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Screens/Home';
import Sign from './Screens/Sign';

export default class App extends React.Component{
render(){
  return(
    
    <View>
     <SwitchContainer/>
    </View>
  );
}
}
var Switch= createSwitchNavigator({
  Screen1: Home,
  Screen2: Sign
})
var SwitchContainer= createAppContainer(Switch)

const Styling = StyleSheet.create({
  container: {
    backgroundColor: 'purple'
  },
  title: {
    color: 'pink',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
})