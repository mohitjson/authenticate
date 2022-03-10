//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// create a component
const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
            ]}>{text}</Text>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        width: '100%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3'
    },
    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2
    },
    container_TERTIARY: {
        backgroundColor: {}
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY: {
        color: '#3B71F3'
    },
    text_TERTIARY: {
        color: 'gray'
    },
    text_TERTIARY: {
        color: 'black'
    },
});

//make this component available to the app
export default CustomButton;
