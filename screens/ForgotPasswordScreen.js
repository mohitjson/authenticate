//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,  } from 'react-native';
import Logo from '../assets/Logo.jpg'
import CustomInput from '../components/custominput/CustomInput';
import CustomButton from '../components/custombutton/CustomButton';


const ForgotPasswordScreen = () => {
    const [username, setUserName] = useState('')

    const onSendPressed = () => {
        console.warn('onSendPressed')
    }
    const onSignUpPress = () => {
        console.warn('onSignUpPress')
    }
    return (
        <View style={styles.root}>

            <Text style={styles.title}>Reset Your password *</Text>
            <CustomInput
                placeholder='username'
                value={username}
                setValue={setUserName}
            />
            <CustomButton
                onPress={onSendPressed}
                text={'Send'}
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
     fontWeight:'bold',
     fontSize:24,
     marginBottom:20
    }
});

//make this component available to the app
export default ForgotPasswordScreen;
