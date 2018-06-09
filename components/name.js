import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Name extends Component {
  render(){
    return (
      <Text> Your name is { this.props.name } </Text> 
    )
  }
}