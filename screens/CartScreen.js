//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';
// create a component
const CartScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>

            <Button color={Colors.primary} title='Back To Home screen' onPress={() => { props.navigation.navigate('HomeScreen') }} />
        </View>
    );
};
CartScreen.options = () => {
    {

        headerRight: () => (<Button title='info' />)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default CartScreen;
