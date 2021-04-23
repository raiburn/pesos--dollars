import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput} from 'react-native';
import Button from './Button';

const Input = () => {
    const [pesos, setPesos] = useState(" ");
    const [dollars, setDollars] = useState(" ");

    return (
        <View>
            <TextInput onChangeText={setPesos} value={pesos}/>
            <TexInput value={dollars}/>
        </View>
    )
}