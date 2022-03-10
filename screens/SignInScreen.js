//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton/SocialSignInButton';

const SignInScreen = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { height } = useWindowDimensions();

    const onSignInPress = () => {
        //validate user
        props.navigation.navigate('HomeScreen')
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
