//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton/SocialSignInButton';

const SignUpScreen = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')




    const onRegesterPress = () => {
        console.warn('onRegesterPress')
    }
    
    const onTermOfUsePressed = () => {
        console.warn('onTermOfUsePressed')
    }
    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed')
    }
    const onSignInPress = () => {
        console.warn('onSignInPress')
    }
    return (
        <View style={styles.root}>

            <Text style={styles.title}>Create an account</Text>

            <CustomInput
                placeholder='Enter name'
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder='Enter email'
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder='Enter password'
                value={password}
                setValue={setPassword}
                secureTextEntry={true}

            />
            <CustomInput
                placeholder='Confirm Password'
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true}

            />
            <CustomButton
                onPress={onRegesterPress}
                text={'Register'}
                type="PRIMARY"
            />
            <Text style={styles.text}>
                By registering, you confirm that you accept our

                <Text style={styles.link} onPress={onTermOfUsePressed}>Terms of use </Text>
                and {" "}
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
            </Text>
            <SocialSignInButton />
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
