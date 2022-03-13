//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useForm, Controller } from "react-hook-form"

import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton/SocialSignInButton';

import { auth } from '../firebase';


const SignInScreen = (props) => {
    const { height } = useWindowDimensions();

    const { control, handleSubmit, formState: { errors } } = useForm();


    const onSignInPress = (data) => {
        // auth
        //     .createUserWithEmailAndPassword(data.username, data.Password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log(user.username)
        //     })
        //     .catch(error => alert(error.message))

        // props.navigation.navigate('HomeScreen')

    }
    const onForgotPassword = () => {
        props.navigation.navigate("ForgotScreen")
    }
    const onSignUpPress = () => {
        props.navigation.navigate("SignUp")
    }
    return (
        <View style={styles.root}>

            <Image source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain' />

            <CustomInput
                name="username"
                placeholder='username'
                control={control}
                rules={{
                    required: 'username is required *',
                    minLength: {
                        value: 12,
                        message: 'Username should be atleast 12 character long'
                    }
                }}
            />
            <CustomInput
                name="Password"
                placeholder='password'
                control={control}
                secureTextEntry={true}
                rules={{
                    required: 'password is required *', minLength: {
                        value: 4,
                        message: 'Password should be minimum 4 character'
                    }
                }}
            />
            <CustomButton
                onPress={handleSubmit(onSignInPress)}
                text={'Sign in'}
                type="PRIMARY"
            />
            <CustomButton
                onPress={onForgotPassword}
                text={'Forgot Password ?'}
                type="TERTIARY"
            />
            <SocialSignInButton />
            <CustomButton
                onPress={onSignUpPress}
                text={'Dont have an account ? Create one'}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
});

//make this component available to the app
export default SignInScreen;
