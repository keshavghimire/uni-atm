import React, { Component } from 'react';
import {createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/assests/navigator/drawable navigation/home'

const drawer = createDrawerNavigator({
    Home: {
        screeen: HomeScreen
    }
})
    
