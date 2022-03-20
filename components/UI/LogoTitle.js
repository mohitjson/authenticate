//import liraries
import React, { Component } from 'react';
import {  Image,  } from 'react-native';
// create a component
function LogoTitle() {
    return (
        <Image
            style={{ width: 200, height: 50, }}
            source={require('../../assets/bevarabialogo.png')}
        />
    );
}

//make this component available to the app
export default LogoTitle;
