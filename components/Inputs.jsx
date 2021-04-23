import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Button} from 'react-native';

const Input = () => {
    const [pesos, setPesos] = useState(" ");
    const [dollars, setDollars] = useState(" ");

    const convert = () =>{
        setDollars(pesos/21.55);
    }

    return (
        <View>
            <Text>Pesos</Text>
            <TextInput style={styles.input} onChangeText={setPesos} value={pesos}/>
            <Text>Dollars</Text>
            <TextInput style={styles.input} value={dollars}/>
            <Button onPress={convert} title="Convertir" color="#841584"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });

export default Input;