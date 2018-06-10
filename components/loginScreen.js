import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage,  } from 'react-native'

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

  render(){
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <TextInput placeholder='Please enter your email' onChangeText={ this.setTextInputState.bind(this,'email') } />
        <TextInput placeholder='Please enter your password' onChangeText={ this.setTextInputState.bind(this,'password') } />
        <Button title='Login' onPress={ this.tryLoggingInUser.bind(this) } /> 
      </View>
    )
  }
}