import React, { Component } from 'react'
import { View, TextInput, Button, AsyncStorage, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class SignUpFormOccupationScreen extends Component {
 
  constructor(props){
    super(props)
    this.state = { 
      inputJobTitle: '', 
    }
  }

  updateUserAttribute(navigate){
    var access_token = ''
    AsyncStorage.getItem('access-token').then((value)=> {
     access_token = JSON.parse(value)
    }).then(()=>{
      fetch('http://localhost:3000/v1/update_user', {
        body: `job_title=${ this.state.inputJobTitle }&access_token=${ access_token }`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST" 
      }).then(()=>{
       
      })  
    })
  }

  setTextInputState(text){
    this.setState({ inputJobTitle: text })
  }

  navigateToSignUpPage(navigate){
    navigate('Login')
  }

  render(){

    const { navigate } = this.props.navigation

    return (
      <View style={ styles.mainBackground }>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Image style={ styles.imageHeader } source={{ uri: 'https://userresearch.google.com/images/team_graphic.png' }} />
          <TextInput style={ styles.textInput } placeholder="What do you do for a living?" onChangeText={ this.setTextInputState.bind(this) } />
          
          <TouchableOpacity onPress={ this.updateUserAttribute.bind(this) } >
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

