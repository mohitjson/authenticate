//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';


const ResetPasswordScreen = (props) => {

    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const onSubmitPress = () => {
        props.navigation.navigate("HomeScreen")
    }
    const onSignUpPress = () => {
        props.navigation.navigate("SignIn")
    }
    return (
        <View style={styles.root}>

            <Text style={styles.title}>Reset Your password *</Text>
            <CustomInput
                placeholder='code'
                value={code}
                setValue={setCode}
            />
            <CustomInput
                placeholder='Enter your new password'
                value={newPassword}
                setValue={setNewPassword}

            />
            <CustomButton
                onPress={onSubmitPress}
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
