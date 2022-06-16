import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputDesc = ({textarea, width, height, fontSize, placeholder, label}) => {
    if(textarea){
        return(
            <View style={styles.container}>
                <Text style={styles.label(fontSize)}>{label} :</Text>
                <TextInput style={styles.inputTextArea(fontSize)} multiline={true} numberOfLines={4} placeholder="Write the package you want..."/>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput style={styles.input(width, height, fontSize)}/>
    </View>
  )
}

export default InputDesc

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: (fontSize) => ({
        fontSize : fontSize ? fontSize : 15,
        color: 'black',
        marginBottom: 5,
        marginTop: 10,
    }),
    input: (fontSize, width, height) => ({
        fontSize : fontSize ? fontSize : 15,
        width: width,
        height: height,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#A7A7A7',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }),
    inputTextArea: (fontSize) => ({
        fontSize : fontSize ? fontSize : 13,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#A7A7A7',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        marginBottom: 10,
    })
})