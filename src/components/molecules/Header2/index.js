import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {Component} from 'react'
import {Back1} from '../../../assets/icon'
import { Gap, ButtonTop } from '../../atoms'
//import { responsiveHeight, responsiveWidth } from '../../../utils'
//import { IconSearch, IconChecklist } from '../../../assets'
//import { connect } from 'react-redux'
//import { saveKeywordAllVendor } from '../../../actions/AllVendorAction'

const Header2 = ({title, onBack}) => {
    return (
      <View style={styles.container}>
        {
          onBack && (
            <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
              <View style={styles.back}>
                <Back1/>
              </View>
            </TouchableOpacity>
          )
        }
        
        <Gap width={10}/>
        <Text style={styles.text}>{title}</Text>
      </View>
    )
  }
  
  export default Header2
  
  
  const styles = StyleSheet.create({
    container: {
      paddingLeft:15,
      paddingVertical: 15,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
      fontSize: 20,
      color: 'black',
      //fontWeight: 'bold',
    },
    back: {
      //backgroundColor: 'white'
    }
  })