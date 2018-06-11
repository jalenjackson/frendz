import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage, Image , StyleSheet, TouchableOpacity } from 'react-native'
var styles = require('../stylesheets/loginScreenStyles')

export default class LoginScreen extends Component {


  constructor(props){
    super(props)
    this.state = { 
      inputEmail: '', 
      inputPassword: '', 
    }
  }
 
  tryLoggingInUser(){
    fetch("http://localhost:3000/v1/login", {
      body: `email=${this.state.inputEmail}&password=${this.state.inputPassword}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST"   
    })
    .then((response)=>{ 
      return response.json()
    })
    .then((data)=>{
      AsyncStorage.setItem('access-token', JSON.stringify(data.access_token))
    })
    .then(()=>{
      AsyncStorage.getItem('access-token').then((value)=> {
        console.log(JSON.parse(value))
      })   
    })
  }

  setTextInputState(key, text){
    if(key === 'email'){
      this.setState({ inputEmail: text })
    }
    if(key === 'password'){
      this.setState({ inputPassword: text })
    }
  }

  navigateToSignUpPage(navigate){
    navigate('SignUp')
  }

  render(){

    const { navigate } = this.props.navigation

    return (
      <View style={ styles.mainBackground }>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Image style={ styles.imageHeader } source={{ uri: 'https://i.pinimg.com/originals/71/f3/51/71f3519243d136361d81df71724c60a0.png' }} /> 
          <TextInput style={ styles.textInput } placeholder='Please enter your email' onChangeText={ this.setTextInputState.bind(this,'email') } />
          <TextInput style={ styles.textInput2 } placeholder='Please enter your password' onChangeText={ this.setTextInputState.bind(this,'password') } />


          <TouchableOpacity onPress={ this.tryLoggingInUser.bind(this) }>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
      
          <Text style={ styles.noAccount }>Don't have an account yet?</Text>
          <Button onPress={ this.navigateToSignUpPage.bind(this, navigate) } color='#69B6F3' title='Create an account' />

        </View>
      </View>
    )
  }
}

