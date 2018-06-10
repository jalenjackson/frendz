import React, { Component } from 'react'
import {Button, ImageBackground, StyleSheet, View, Text, Image, AsyncStorage } from 'react-native'

let userSignedin = false



export default class LandingUnAuthScreen extends Component {

  navigate(navigation, navigate){
    if(navigation == 'Login'){
      navigate(navigation)
    }
    if(navigation == 'SignUp'){
      navigate(navigation)
    }
  }

  render(){
    const { navigate } = this.props.navigation
    AsyncStorage.getItem('access-token').then((value)=> {
      value ? userSignedin = true : userSignedin = false
    }).then(()=>{
      userSignedin ? navigate('Home') : ''
    })
    
    return (
        <ImageBackground style={ styles.backgroundImage } source={{ uri: 'https://mentalandbodycare.com/wp-content/uploads/2015/03/man-women-people-happy-summer-1680x1050.jpg' }} >
          <View style={ styles.gradient }>
            <Image style={ styles.logo } source={{ uri: 'https://www.utep.edu/faculty-development/_Files/images/person.png' }} />
            <Text style={ styles.header }>FRENDZ</Text>
            <Button style={ styles.signInButton } title='Sign In' onPress={ this.navigate.bind(this, 'Login', navigate) } />
            <Button title='Sign up' onPress={ this.navigate.bind(this, 'SignUp', navigate) } />
          </View>
        </ImageBackground>
    )
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  header: {
    fontSize: 60,
    marginTop: 30,
    color: 'white',
    textAlign: 'center'
  },
  logo: {
    alignSelf: 'center',
    marginTop: '30%',
    width: 150,
    height: 150
  },
  signInButton: {
    width: '80%',
    height: 30,
    backgroundColor: 'red',
    color: 'white'
  }
});