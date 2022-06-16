import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonLoading from '../ButtonLoading'

const Button = ({title, color='#FFFFFF', textColor='#FFD0EC', onPress, }, props) => {

  const { loading } = props;
  //loading
  if(loading) {
    return <ButtonLoading {...props}/>
  }

  return (
    <View style={styles.button}>
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{title}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    //marginLeft: 80,
    //marginRight: 80,
    marginHorizontal: 70
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
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD0EC',
  }),
  text: textColor => ({
    fontSize: 14,
    fontWeight: 'bold',
    color: textColor,
  }),
})