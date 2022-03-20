//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useForm, Controller } from "react-hook-form"

import Logo from '../assets/Logo.jpg'

import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton/SocialSignInButton';

// import { auth } from '../firebase';
import axios from 'axios';

const SignInScreen = (props) => {
    const { height } = useWindowDimensions();
    const [message, setMessage] = useState('');


    const { control, handleSubmit, formState: { errors } } = useForm();


    const onSignInPress = (credentials) => {
        // props.navigation.navigate('HomeScreen')
        console.log(credentials)
        fetch(
            'https://uae-staging.bevarabia.com/rest/V1/integration/customer/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": credentials.username,
                "password": credentials.password
            }),
        })
            .then((response) => {
                // console.log('status code :', response);
                response.json()
                    .then((data) => setMessage(data.message))


                if (response.status == 200) {
                    props.navigation.navigate('HomeScreen')
                }
            })
            .catch((error) => console.log(error))

    }
    const handleMessage = (message) => {
        setMessage(message);
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
            <Text style={{ color: 'red' }}>{message}</Text>
            <CustomInput
                name="username"
                placeholder='email'
                control={control}
                rules={{
                    required: 'email is required *',
                    minLength: {
                        value: 12,
                        message: 'email should be atleast 12 character long'
                    }
                }}
            />
            <CustomInput
                name="password"
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
