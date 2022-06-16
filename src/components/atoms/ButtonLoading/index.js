import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const ButtonLoading = ({title, color='#FFD0EC', textColor='#FFFFFF', onPress}) => {

  

  return (
    <View style={styles.button}>
    <TouchableOpacity>
      <View style={styles.container(color)}>
        <ActivityIndicator size="small" color="#FFFFFF"/>
        <Text style={styles.text(textColor)}>Loading...</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default ButtonLoading

const styles = StyleSheet.create({
  button: {
    paddingLeft: 80,
    paddingRight: 80,

   /*shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    */
   // nd jdi dp shadow
  },
  container: color => ({
    height: 40,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
  text: textColor => ({
    fontSize: 14,
    fontWeight: 'bold',
    color: textColor,
  }),
})