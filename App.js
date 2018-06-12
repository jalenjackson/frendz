import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LandingUnAuthScreen from './screens/landingUnAuthScreen'
import LoginScreen from './screens/loginScreen'
import SignUpScreen from './screens/signUpScreen'
import HomeScreen from './screens/homeScreen'
import SignUpFormEmailAddressScreen from './screens/signUpFormEmailAddressScreen'
import SignUpFormNameScreen from './screens/signUpFormNameScreen'
import SignUpFormOccupationScreen from './screens/signUpFormOccupationScreen'

const App = StackNavigator({
  LandingPageUnAuthenticated: { screen: LandingUnAuthScreen },
  SignUpFormEmailAddress: { screen: SignUpFormEmailAddressScreen },
  SignUpFormName: { screen: SignUpFormNameScreen },
  SignUpFormOccupation: { screen: SignUpFormOccupationScreen },
  HomeScreen: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LoginScreen }
})

export default App;

