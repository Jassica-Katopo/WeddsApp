import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconPhotographer, IconBridal, IconCatering, IconVenue, IconWo } from '../../../assets'

const ButtonIcon = ({title, onPress}) => {
  
  const Icon = () => {
      if(title === "Photographer") return <IconPhotographer/>
      if(title === "Bridal") return <IconBridal/>
      if(title === "Catering") return <IconCatering/>
      if(title === "Venue") return <IconVenue/>
      if(title === "WO") return <IconWo/>

      return <IconPhotographer/>
  }

    return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
        <View style={styles.button}>
            <Icon />
        </View>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
        marginRight: 12,
        marginLeft: 12,
    },
    button:{
        backgroundColor: '#DCF5ED',
        padding: 12,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
      
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 5,
        color: '#B19D64'
    },
    
})