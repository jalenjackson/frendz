import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LandingUnAuthScreen from './screens/landingUnAuthScreen'
import LoginScreen from './screens/loginScreen'
import SignUpScreen from './screens/signUpScreen'
import HomeScreen from './screens/homeScreen'

const App = StackNavigator({
  LandingPageUnAuthenticated: { screen: LandingUnAuthScreen },
  HomeScreen: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LoginScreen }
})

export default App;

