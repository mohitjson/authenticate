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
    const [message, setMessage] = useState([]);

    const onRegesterPress = (credentials) => {
        // props.navigation.navigate("ConfirmEmail")
        console.log(credentials)
        fetch(
            'https://uae-staging.bevarabia.com/rest/V1/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                "customer": {
                    "email": credentials.email,
                    "firstname": credentials.firstname,
                    "lastname": credentials.lastname
                },
                "password": credentials.password
            }),
        })
            .then((response) => {
                console.log('status code:', response.status)
                response.json()
                    .then((data) => setMessage(data.message))

                    if (response.status !== 200) {

                        setMessage(response.message);
    
                } else {
                    props.navigation.navigate('SignIn')
                }
            })
            .catch((error) => console.log(error.response.messge))
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
            <Text style={{ color: 'red' }}>{message}</Text>
            <CustomInput
                control={control}
                name="firstname"
                placeholder='firstname'
                rules={{
                    required: 'firstname is required *',
                    minLength: {
                        value: 3,
                        message: 'firstname should be atleast 3 character long'
                    },
                    maxLength: {
                        value: 12,
                        message: 'firstname should be maximum 12 character'
                    }
                }}

            />
            <CustomInput
                control={control}
                name="lastname"
                placeholder='lastname'
                rules={{
                    required: 'lastname is required *',
                    minLength: {
                        value: 3,
                        message: 'lastname should be atleast 3 character long'
                    },
                    maxLength: {
                        value: 12,
                        message: 'lastname should be maximum 12 character'
                    }
                }}

            />
            <CustomInput
                control={control}
                name='email'
                placeholder='email'
                rules={{
                    required: 'email is required',
                    pattern: { value: EMAIL_REGEX, message: 'email is invalid' },
                }}
            />
            <CustomInput
                control={control}
                name='password'
                placeholder='password'
                secureTextEntry={true}
                rules={{
                    required: 'password is required',
                    minLength: {
                        value: 8,
                        message: 'password should be at least 8 characters long',
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
