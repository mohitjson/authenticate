//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import { useForm } from 'react-hook-form'


const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = (props) => {

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');


    const onRegesterPress = () => {
        props.navigation.navigate("ConfirmEmail")
    }
    const onTermOfUsePressed = () => {
        console.warn('onTermOfUsePressed')
    }
    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed')
    }
    const onSignInPress = () => {
        props.navigation.navigate("SignIn")
    }
    return (
        <View style={styles.root}>

            <Text style={styles.title}>Create an account</Text>

            <CustomInput
                control={control}
                name="username"
                placeholder='username'
                rules={{
                    required: 'Username is required *',
                    minLength: {
                        value: 3,
                        message: 'Username should be atleast 3 character long'
                    },
                    maxLength: {
                        value: 24,
                        message: 'Username should be maximum 24 character'
                    }
                }}

            />
            <CustomInput
                control={control}
                name='email'
                placeholder='email'
                rules={{
                    required: 'Email is required',
                    pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
                }}
            />
            <CustomInput
                control={control}
                name='password'
                placeholder='password'
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password should be at least 8 characters long',
                    },
                }}
            />
            <CustomInput
                control={control}
                name="confirm password"
                placeholder='Confirm Password'
                secureTextEntry={true}
                rules={{
                    validate: value => value === pwd || 'Password do not match',
                }}
            />
            <CustomButton
                onPress={handleSubmit(onRegesterPress)}
                text={'Register'}
                type="PRIMARY"
            />
            <Text style={styles.text}>
                By registering, you confirm that you accept our

                <Text style={styles.link} onPress={onTermOfUsePressed}>Terms of use </Text>
                and {" "}
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
            </Text>
            {/* <SocialSignInButton /> */}
            <CustomButton
                onPress={onSignInPress}
                text={'Have an account? Sign in '}
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10

    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    },
});

//make this component available to the app
export default SignUpScreen;
