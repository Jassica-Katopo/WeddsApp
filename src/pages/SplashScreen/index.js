import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { LogoWedds } from '../../assets'
import { IllustrationWedding } from '../../assets'

export default class SplashScreen extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.replace('MainApp')
    }, 4000)
  }
  render() {
    return (
      <View style={styles.pages}>
        <LogoWedds/>
        <View style={styles.illustration}>
          <IllustrationWedding/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    
  }
})