import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage, Image , StyleSheet, TouchableOpacity } from 'react-native'
var ImagePicker = require('react-native-image-picker')

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


export default class LoginScreen extends Component {

  
  constructor(props){
    super(props);

    this.state = {
      usersNearYou: '',
      imageSource: '',
      all_user_images: ''
    }
  }

  usersNearYou(){
    return this.state.usersNearYou.map((data, i)=>{
      return (
        <View key={ i }>
          <Text>{ data.user.name } </Text>
          { data.interests.map((interest, i)=>{
            return (
              <Text key={ i }> { interest.interest } </Text>
            )
          }) } 
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
        </View>
      )
    })
  } 

  userImages(){
    return this.state.all_user_images.map((data, i)=>{
      return (
        <View key={ i }>
          <Image style={{ width: 200, height: 200 }} source={{ uri: 'data:image/jpeg;base64,' + data.base_64 }} />
        </View>
      )
    })
  }

  componentDidMount(){

    AsyncStorage.getItem('access-token').then((value)=> {
      fetch('http://localhost:3000/v1/images', {
        body: `access_token=${ JSON.parse(value) }`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST" 
      }).then((response)=>{
        return response.json()
      }).then((data)=>{
        this.setState({ all_user_images: data })
      }) 
    }); 

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

  navigateOnDashboard(navigate, key){
    if(key == 'editProfile'){
      navigate('UserEdit')
    } 
    if(key == 'messages'){
      navigate('UserMessages')
    }
  }

  callImagePicker(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {

        AsyncStorage.getItem('access-token').then((value)=> {

          fetch('http://localhost:3000/v1/uploads', {
            body: `base64_image_data=${ response.data }&access_token=${ JSON.parse(value) }`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            method: "POST" 
            }).then((response)=>{
              return response.json();
            }).then(()=>{
              let source = { uri: 'data:image/jpeg;base64,' + response.data };
              this.setState({ imageSource: source })
          })

        });

      }
    }); 
  }  
  
  render(){
    const { navigate } = this.props.navigation

    return (
      <View>
        { this.state.all_user_images == '' ? null : this.userImages() }  
        <Image source={ this.state.imageSource } style={{ width: 200, height: 200 }} />
        <Button onPress={ this.callImagePicker.bind(this) } title='Add images' />
        <Button onPress={ this.navigateOnDashboard.bind(this, navigate, 'editProfile') } title='Edit Profile' />  
        <Button onPress={ this.navigateOnDashboard.bind(this, navigate, 'messages') } title='Messages' />
        { this.state.usersNearYou == '' ? null : this.usersNearYou() }
      </View>
    )
  }
}