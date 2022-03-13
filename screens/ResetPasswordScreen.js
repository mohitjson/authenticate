//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import { useForm } from 'react-hook-form';

const ResetPasswordScreen = (props) => {

    const { control, handleSubmit } = useForm();

    const onSubmitPress = (data) => {
        console.warn(data);
        props.navigation.navigate("HomeScreen")
    }
    const onSignUpPress = () => {
        props.navigation.navigate("SignIn")
    }
    return (
        <View style={styles.root}>

            <Text style={styles.title}>Reset Your password *</Text>
            <CustomInput
                control={control}
                name='code'
                placeholder='code'
                rules={{
                    required: 'Code is required'
                }}
            />
            <CustomInput
                control={control}
                name='password'
                placeholder='Enter your new password'
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password should be at least 8 character long'
                    }
                }}
            />
            <CustomButton
                onPress={handleSubmit(onSubmitPress)}
                text={'Submit'}
                type="PRIMARY"
            />

            <CustomButton
                onPress={onSignUpPress}
                text={'Back to Sign in'}
                type="TERTIARY"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20
    }
});

//make this component available to the app
export default ResetPasswordScreen;
