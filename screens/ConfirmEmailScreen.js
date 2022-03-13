//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import { useForm } from 'react-hook-form'

const ConfirmEmailScreen = (props) => {

    const { control, handleSubmit, } = useForm();



    const onConfirmPressed = (data) => {
        console.warn(data)
        props.navigation.navigate("HomeScreen")
    }
    const onResendPress = () => {
        console.warn('onResendPress')
    }
    const onSignUpPress = () => {
        props.navigation.navigate("SignIn")
    }
    return (
        <View style={styles.root}>

            <Text>Confirm your email</Text>
            <CustomInput
                control={control}
                name='code'
                placeholder='Enter your confirmation code'
                rules={{
                    required: 'Confirmation code is required'
                }}


            />
            <CustomButton
                onPress={handleSubmit(onConfirmPressed)}
                text={'Confirm'}
                type="PRIMARY"
            />
            <CustomButton
                onPress={onResendPress}
                text={'Resend code'}
                type="SECONDARY"
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
    text: {
        paddingHorizontal: 10
    }
});

//make this component available to the app
export default ConfirmEmailScreen;
