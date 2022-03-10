//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton/SocialSignInButton';

const SignInScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { height } = useWindowDimensions();

    const onSignInPress = () => {
        console.warn('Sign in')
    }
    const onForgotPassword = () => {
        console.warn('Forgot Password')
    }
    const onSignUpPress = () => {
        console.warn('onSignUpPress')
    }
    return (
        <View style={styles.root}>

            <Image source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain' />

            <CustomInput
                placeholder='Enter name'
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder='Enter password'
                value={password}
                setValue={setPassword}
                secureTextEntry={true}

            />
            <CustomButton
                onPress={onSignInPress}
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
                text={'no account ? Sign Up'}
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
