import React from "react";
import { StyleSheet, Button} from 'react-native';
import Button from './Button';
import convert from '../services/convert';

const Button = () => {

    return (
        <View>
            <Button onPress={convert}>Convertir</Button>
        </View>
    )
}

export default Button;