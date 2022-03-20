//import liraries
import React, { Component } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import LogoTitle from '../components/UI/LogoTitle';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import Practice from '../screens/Practice';
import CartScreen from '../screens/CartScreen';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawer1() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={Stack1} options={{
                headerTitle: props => <LogoTitle{...props} />,

                headerRight: () => (
                    <Ionicons name="md-cart-sharp" size={35} color="black" style={{padding:12}} onPress={() => { }} />
                )
            }} />
            <Drawer.Screen name='About us' component={Practice}/>
            <Drawer.Screen name='Offers' component={HomeScreen} />
            <Drawer.Screen name='My Orders' component={HomeScreen} />
            <Drawer.Screen name='My Accounts' component={HomeScreen} />
            <Drawer.Screen name='Need Help?' component={HomeScreen} />
        </Drawer.Navigator>
    )
}
function Stack1() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='HomeScreen'
                component={HomeScreen}
            />
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
            <Stack.Screen name='ForgotScreen' component={ForgotPasswordScreen} />
            <Stack.Screen name='NewPassword' component={ResetPasswordScreen} />
            <Stack.Screen name='CartScreen' component={CartScreen} />
        </Stack.Navigator>
    )
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer1 />
        </NavigationContainer>
    );
};

//make this component available to the app
export default Navigation;
