/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AppState,
} from 'react-native';

import codePush from "react-native-code-push";

class Jicheng3 extends Component {
  componentDidMount(){
    codePush.getUpdateMetadata()
    .then((update)=>{
      console.log(update);
    });
    AppState.addEventListener('change', (newState)=>{
      newState === 'active' && codePush.sync();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          真机不能调试啊~~
        </Text>
        <Text style={styles.instructions}>
          我改了这里，你看不到
        </Text>
        <Image source={require('./res/header-icon.png')}
            resizeMode={'contain'}
            style={{width:100,height:200}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('Jicheng3', () => Jicheng3);
