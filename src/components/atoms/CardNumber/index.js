import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../Button'
import Gap from '../Gap'

const CardNumber = ({profile, navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.numberWrapper}>
            <Text style={styles.textMyNumber}>My number :</Text>
            <Text style={styles.textWhatsapp}>{profile.whatsapp}</Text>
        </View>
      <Button title ="Change Number" onPress={() => navigation.navigate('EditProfile')}/>
      <Gap height={10}/>
    </View>
  )
}

export default CardNumber

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
    },
    textMyNumber: {
        color: 'black',
        fontSize: 14,
    },
    textWhatsapp: {
        color: 'black',
        fontSize: 14,
        marginLeft: 10,
    },
    numberWrapper: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 5,
    },

})