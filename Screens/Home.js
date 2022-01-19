import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class Home extends React.Component {
  goToSign = (img) => {
    console.log(img);
    this.props.navigation.navigate('Screen2', { image: img });
  };
  render() {
    return (
      <View>
        <Text style={Styling.title}>Sign Language</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.goToSign('image_1');
            }}>
            <Image
              source={require('../assets/A.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          
                    <TouchableOpacity
            onPress={() => {
              this.goToSign('image_2');
            }}>

            <Image
              source={require('../assets/B.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

                    <TouchableOpacity
            onPress={() => {
              this.goToSign('image_3');
            }}>

            <Image
              source={require('../assets/C.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

                  <TouchableOpacity
            onPress={() => {
              this.goToSign('image_4');
            }}>

            <Image
              source={require('../assets/D.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>

          <TouchableOpacity   
            onPress={() => {
              this.goToSign('image_5');
            }}>
            <Image
              source={require('../assets/E.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_6');
            }}>
            <Image
              source={require('../assets/F.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_7');
            }}>
            <Image
              source={require('../assets/G.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_8');
            }}>
            <Image
              source={require('../assets/H.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_9');
            }}>
            <Image
              source={require('../assets/I.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_10');
            }}>
            <Image
              source={require('../assets/J.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_11');
            }}>
            <Image
              source={require('../assets/K.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity          
            onPress={() => {
              this.goToSign('image_12');
            }}>
            <Image
              source={require('../assets/L.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity          
            onPress={() => {
              this.goToSign('image_13');
            }}>
            <Image
              source={require('../assets/M.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_14');
            }}>
            <Image
              source={require('../assets/N.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity         
            onPress={() => {
              this.goToSign('image_15');
            }}>
            <Image
              source={require('../assets/O.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_16');
            }}>
            <Image
              source={require('../assets/P.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity          
            onPress={() => {
              this.goToSign('image_17');
            }}>
            <Image
              source={require('../assets/Q.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_18');
            }}>
            <Image
              source={require('../assets/R.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity        
            onPress={() => {
              this.goToSign('image_19');
            }}>
            <Image
              source={require('../assets/S.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity          
            onPress={() => {
              this.goToSign('image_20');
            }}>
            <Image
              source={require('../assets/T.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity          
            onPress={() => {
              this.goToSign('image_21');
            }}>
            <Image
              source={require('../assets/U.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_22');
            }}>
            <Image
              source={require('../assets/V.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_23');
            }}>
            <Image
              source={require('../assets/W.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity         
            onPress={() => {
              this.goToSign('image_24');
            }}>
            <Image
              source={require('../assets/X.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity          
            onPress={() => {
              this.goToSign('image_25');
            }}>
            <Image
              source={require('../assets/Y.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity           
            onPress={() => {
              this.goToSign('image_26');
            }}>
            <Image
              source={require('../assets/Z.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
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
    backgroundColor: 'blue',
  },
});
