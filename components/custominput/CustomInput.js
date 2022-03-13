//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';


const CustomInput =
    ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
        return (

            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({
                    field: { value, onChange, onBlur }, fieldState: { error } }) => (
                    <>
                        <View style={[styles.container, { borderColor: error ? 'red' : "#e8e8e8" }]}>
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder={placeholder}
                                secureTextEntry={secureTextEntry}
                                style={styles.input}
                            />
                        </View>
                        {error && <Text style={{ alignSelf: 'stretch', color: 'red' }}>{error.message || 'Error'}</Text>}
                    </>
                )}
            />

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
