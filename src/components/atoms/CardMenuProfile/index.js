import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconNext } from '../../../assets'
import FIREBASE from '../../../config/Firebase'
import { clearStorage } from '../../../utils'

const CardMenuProfile = ({menu, navigation}) => {

    const onSubmitProfile = () => {
        if(menu.page === "SignIn"){
            FIREBASE.auth().signOut().then(function() {
                // Sign-out successful.

                clearStorage()
                navigation.replace('SignIn')

              }).catch(function(error) {
                // An error happened.

                alert(error)

              });
        }else{
            navigation.navigate(menu.page)
        }
    }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => onSubmitProfile()}>
        {menu.icon}
        <Text style={styles.textName}>{menu.name}</Text>
        <IconNext/>
    </TouchableOpacity>
  )
}

export default CardMenuProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent:'space-between',
        backgroundColor: 'white',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 70,
        padding: 8,
        borderRadius: 10,
        alignItems: 'center',
    },
    textName: {
        fontSize: 14,
    }
})