import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LandingUnAuthScreen from './components/landingUnAuthScreen'
import LoginScreen from './components/loginScreen'
import SignUpScreen from './components/signUpScreen'
import HomeScreen from './components/homeScreen'

const App = StackNavigator({
  LandingPageUnAuthenticated: { screen: LandingUnAuthScreen },
  HomeScreen: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LoginScreen }
})

export default App;

