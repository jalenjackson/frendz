import React, { Component } from 'react'
import { View, TextInput, Button, AsyncStorage, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class SignUpFormEmailAddress extends Component {
 
  constructor(props){
    super(props)
    this.state = { 
      inputEmail: '', 
    }
  }

  trySigningUpUser(){
    fetch('http://localhost:3000/v1/sign_up', {
      body: `email=${ this.state.inputEmail }&password=${ this.state.inputPassword }`,
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
  }

  navigateToSignUpPage(navigate){
    navigate('Login')
  }

  navigateToFinishUser(navigate){
    fetch('http://localhost:3000/v1/sign_up', {
      body: `email=${ this.state.inputEmail }&password=${ this.state.inputPassword }`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST" 
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      AsyncStorage.setItem('access-token', JSON.stringify(data.access_token))
    }).then(()=>{
      navigate('SignUpFormName')
    })
  }

  render(){

    const { navigate } = this.props.navigation

    return (
      <View style={ styles.mainBackground }>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Image style={ styles.imageHeader } source={{ uri: 'https://cdn3.iconfinder.com/data/icons/ui-2-filled-line/32/email_UI_UX_website_web-512.png' }} />
          <TextInput style={ styles.textInput } placeholder='email' onChangeText={ this.setTextInputState.bind(this, 'email') } />
          <TextInput style={ styles.textInput2 } placeholder='password' onChangeText={ this.setTextInputState.bind(this, 'password') } />
          
          <TouchableOpacity onPress={ this.navigateToFinishUser.bind(this, navigate) } >
            <View style={styles.nextButton}>
              <Text style={styles.nextButtonText}>
                Next
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={ styles.noAccount }>Already have an account?</Text>
          <Button onPress={ this.navigateToSignUpPage.bind(this, navigate) } color='#69B6F3' title='Sign In' />



        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  imageHeader: {
    width: 200,
    height: 200,
    transform: [
      { translateY: 50 }
    ]
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgb(245,245,245)',
    marginTop: 85,
    paddingLeft: 20
  },
  textInput2: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgb(245,245,245)',
    marginTop: 15,
    paddingLeft: 20
  },
  nextButton: {
    width: 300,
    height: 40,
    backgroundColor: '#69B6F3',
    borderRadius: 5,
    transform: [
      { translateY: 15 }
    ]
  },
  nextButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 11
  },
  noAccount: {
    marginTop: 55,
    color: '#ccc',
    fontSize: 16
  }
});

