//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CustomInput = ({ value, setValue,placeholder,secureTextEntry }) => {
    return (
        <View style={styles.container}>

            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5

    },
    input: {
    }
});

//make this component available to the app
export default CustomInput;
