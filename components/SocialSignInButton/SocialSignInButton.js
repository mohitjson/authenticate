//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../custombutton/CustomButton';

const onSignInFacebook = () => {
    console.warn('onSignInFacebook')
}
const onSignInGoogle = () => {
    console.warn('onSignInGoogle')
}
const onSignInApple = () => {
    console.warn('onSignInApple')
}


const SocialSignInButton = () => {
    return (
        <>
            <CustomButton
                onPress={onSignInFacebook}
                text={'Sign In with Facebook'}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
            />
            <CustomButton
                onPress={onSignInGoogle}
                text={'Sign In with Google'}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />
            <CustomButton
                onPress={onSignInApple}
                text={'Sign In with Apple'}
                bgColor='#e3e3e3'
                fgColor='#363636'
            />
           
        </>
    );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SocialSignInButton;
