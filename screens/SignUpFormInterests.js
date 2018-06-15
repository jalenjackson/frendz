import React, { Component } from 'react'
import { View, TextInput, Button, AsyncStorage, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class SignUpFormInterestsScreen extends Component {
 
  constructor(props){
    super(props)
    this.state = { 
      inputInterest: '', 
      interests: ''
    }
  }

  updateUserAttribute(navigate){
    var access_token = ''
    AsyncStorage.getItem('access-token').then((value)=> {

      fetch('http://localhost:3000/v1/update_user', {
        body: `interest=${ this.state.inputInterest }&access_token=${ JSON.parse(value) }`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST" 
      }).then((response)=>{
        return response.json();
      }).then((data)=>{
        this.setState({ interests: data })
      })

    })
  }

  setTextInputState(text){
    this.setState({ inputInterest: text })
  } 

  navigateToSignUpPage(navigate){
    navigate('Login')
  }

  pills(){
    return this.state.interests.map((data, i)=>{
      return (
        <View key={ i }>
          <Text>{ data.interest }</Text>
        </View>
      ) 
    })
  }

  finishedAddingPills(navigate){
    navigate('GenderPreference')
  } 

  render(){

    const { navigate } = this.props.navigation

    return (
      <View style={ styles.mainBackground }>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Image style={ styles.imageHeader } source={{ uri: 'https://cdn-images-1.medium.com/max/1200/1*oegczK5AHtvznmLvaFk2Xg.png' }} />
          <TextInput style={ styles.textInput } placeholder="List out your interests" onChangeText={ this.setTextInputState.bind(this) } />
          
          <TouchableOpacity onPress={ this.updateUserAttribute.bind(this, navigate) } >
            <View style={styles.nextButton}>
              <Text style={styles.nextButtonText}>
                Add Interest
              </Text>
            </View>
          </TouchableOpacity>

          { this.state.interests == '' ? null : this.pills() }

          <Button onPress={ this.finishedAddingPills.bind(this, navigate) } color='#69B6F3' title='Next' />


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

