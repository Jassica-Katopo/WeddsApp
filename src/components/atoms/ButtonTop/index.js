import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconChecklist } from '../../../assets'

const ButtonTop = (props) => {
    const Icon = () => {
        if(icon === "checklist") {
            return <IconChecklist/>
        }
        return <IconChecklist/>
    }
    const {onPress, icon, totalChecklist, padding} = props
  return (
    <TouchableOpacity style={styles.container(padding)} activeOpacity={0.7} onPress={onPress}>
        <Icon/>

        {totalChecklist && (
            <View style={styles.notification}>
                <Text style={styles.textNotification}>{totalChecklist}</Text>
            </View>
        )}
    </TouchableOpacity>
  )
}

export default ButtonTop

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: 'white',
        padding: padding,
        borderRadius: 5,
    }),
    notification: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 4,
    },
    textNotification: {
        fontSize: 8,
        color: 'white',
    }
})