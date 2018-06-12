import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LandingUnAuthScreen from './screens/landingUnAuthScreen'
import LoginScreen from './screens/loginScreen'
import SignUpScreen from './screens/signUpScreen'
import HomeScreen from './screens/homeScreen'
import SignUpFormEmailAddressScreen from './screens/signUpFormEmailAddressScreen'
import SignUpFormNameScreen from './screens/signUpFormNameScreen'
import SignUpFormOccupationScreen from './screens/signUpFormOccupationScreen'
import SignUpFormInterestsScreen from './screens/SignUpFormInterests'
import DashboardScreen from './screens/dashboardScreen'
import GenderPreferenceScreen from './screens/genderPreferenceScreen'
import { AsyncStorage } from 'react-native'


const App = StackNavigator({
  LandingPageUnAuthenticated: { screen: LandingUnAuthScreen },
  SignUpFormEmailAddress: { screen: SignUpFormEmailAddressScreen },
  SignUpFormName: { screen: SignUpFormNameScreen },
  SignUpFormInterests: { screen: SignUpFormInterestsScreen },
  GenderPreference: { screen: GenderPreferenceScreen },
  SignUpFormOccupation: { screen: SignUpFormOccupationScreen },
  Dashboard: { screen: DashboardScreen },
  HomeScreen: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LoginScreen }
})

export default App;

