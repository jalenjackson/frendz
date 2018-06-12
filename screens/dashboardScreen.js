import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage, Image , StyleSheet, TouchableOpacity } from 'react-native'

export default class LoginScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      usersNearYou: ''
    }
  }

  usersNearYou(){
    return this.state.usersNearYou.map((data, i)=>{
      return (
        <View key={ i }>
          <Text>{ data.name }</Text>
        </View>
      )
    })
  }

  componentDidMount(){
    let access_token = ''
    AsyncStorage.getItem('access-token').then((value)=>{
      access_token = JSON.parse(value)
    })
    navigator.geolocation.getCurrentPosition((position)=>{
      fetch('http://localhost:3000/v1/matches', {
        body: `latitude=${ position.coords.latitude }&longitude=${ position.coords.longitude }&access_token=${ access_token }`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST" 
      }).then((response)=>{ 
        return response.json();
      }).then((data)=>{
        this.setState({ usersNearYou: data })
      })
    });
  }


  render(){
    return (
      <View>
        <Text>People near you</Text>
        { this.state.usersNearYou == '' ? null : this.usersNearYou() }
      </View>
    )
  }
}