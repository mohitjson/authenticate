//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';


const ConfirmEmailScreen = (props) => {

    const [confirmcode, setConfirmcode] = useState('')


    const onConfirmPressed = () => {
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

            <Text>Confirmation Code *</Text>
            <CustomInput
                placeholder='Enter your confirmation code'
                value={confirmcode}
                setValue={setConfirmcode}


            />
            <CustomButton
                onPress={onConfirmPressed}
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
