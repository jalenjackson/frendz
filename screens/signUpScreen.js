import React, { Component } from 'react'
import { View, TextInput, Button, AsyncStorage,  } from 'react-native'

export default class TextApp extends Component {

  constructor(props){
    super(props)
    this.state = { 
      inputEmail: '', 
      inputPassword: '', 
      inputName: '',
      inputWorkField: '',
      inputJobTitle: '',
      inputWorkPlace: ''
    }
  }
 
  trySigningUpUser(){
    fetch('http://localhost:3000/v1/sign_up', {
      body: `email=${ this.state.inputEmail }&password=${ this.state.inputPassword }&name=${ this.state.inputName }&work_field=${ this.state.inputWorkField }&job_title=${ this.state.inputJobTitle }&work_place=${ this.state.inputWorkPlace }`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST" 
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
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
    if(key === 'name'){
      this.setState({ inputName: text })
    }
    if(key === 'work_field'){
      this.setState({ inputWorkField: text })
    }
    if(key === 'job_title'){
      this.setState({ inputJobTitle: text })
    }
    if(key === 'work_place'){
      this.setState({ inputWorkPlace: text })
    }
  }

  render(){
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <TextInput placeholder='Name' onChangeText={ this.setTextInputState.bind(this, 'name') } />
        <TextInput placeholder='email' onChangeText={ this.setTextInputState.bind(this, 'email') } />
        <TextInput placeholder='work field' onChangeText={ this.setTextInputState.bind(this, 'work_field') } />
        <TextInput placeholder='job title' onChangeText={ this.setTextInputState.bind(this, 'job_title') } />
        <TextInput placeholder='work place' onChangeText={ this.setTextInputState.bind(this, 'work_place') } />
        <TextInput placeholder='password' onChangeText={ this.setTextInputState.bind(this, 'password') } />
        <Button title='Test Sign Up' onPress={ this.trySigningUpUser.bind(this) } />
      </View>
    )
  }
}
