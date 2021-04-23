import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight} from 'react-native';
import Input from './components/Inputs';

export default function App() {

  const A = () =>{
    alert('21.55');
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={A}>
        <Image source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{
            width: 50,
            height: 50,
          }}
          />
        </TouchableHighlight>
      <Input />
      <StatusBar barStyle="dark-content" backgroundColor="#ff0000" hidden={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
