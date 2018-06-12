import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper'
var styles = require('../stylesheets/unAuthLandingStyles')

export default class LandingUnAuthScreen extends Component {

  navigate(navigation, navigate){
    if(navigation == 'Login'){
      navigate(navigation)
    }
    if(navigation == 'SignUpFormEmailAddress'){
      navigate(navigation)
    }
  }

  componentDidMount(){
    
  }

  render(){
    const { navigate } = this.props.navigation 

    AsyncStorage.getItem('access-token').then((value)=> {
      if(value){
        //navigate('Dashboard') 
      }
    }) 
  
    return (
        <View style={ styles.mainBackground }>
          <View style={ styles.wrapper }>
            <Swiper  showsButtons={false} >
              <View style={styles.slide1}>
                <Text style={styles.slide1HeaderText}>Frendz</Text>
                <Text style={styles.slide1SubText}>Meet people who are just like you.</Text>
                <Image style={ styles.slide1Image } source={{ uri: 'https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-11.gif' }} />
              </View>
              <View style={styles.slide2}>
              <Text style={styles.slide1HeaderText}>Find your next best friend</Text>
                <Text style={styles.slide1SubText}>Or your next true love ❤️ </Text>
                <Image style={ styles.slide1Image } source={{ uri: 'https://i.pinimg.com/originals/83/50/f9/8350f9ef80711e1f358025bd06245035.gif' }} />
              </View>
              <View style={styles.slide3}>
              <Text style={styles.slide1HeaderText}>People who are just like you!</Text>
                <Text style={styles.slide1SubText}>Millions of people with similar interests.</Text>
                <Image style={ styles.slide1Image } source={{ uri: 'https://cdn.dribbble.com/users/729829/screenshots/2389505/menu.gif' }} />
              </View>
              <View style={styles.slide3}>
              <Text style={styles.slide1HeaderText}>Join Frendz today!</Text>
                <Text style={styles.slide1SubText}>And explore the world.</Text>
                <Image style={ styles.slide1Image } source={{ uri: 'https://media.giphy.com/media/11R5hYbhv3m2eQ/source.gif' }} />
              </View>
            </Swiper>

            <TouchableOpacity onPress={ this.navigate.bind(this, 'SignUpFormEmailAddress', navigate) }>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>
                  Get Started
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.navigate.bind(this, 'Login', navigate) } style={ styles.signInText } >
              <Text style={ styles.signInTextButton }>Sign In</Text>
            </TouchableOpacity>

          </View>
        </View>
    )
  }
}