import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeNA, HomeA, ProgressNA, ProgressA, ProfileNA, ProfileA } from '../../../assets'


const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if(label === "Home") return isFocused ? <HomeA/> : <HomeNA/>
    if(label === "Status") return isFocused ? <ProgressA/> : <ProgressNA/>
    if(label === "Profile") return isFocused ? <ProfileA/> : <ProfileNA/>

    return <HomeA/>
  }
  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
          <Icon/>
        <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItem: 'center'
  },
  text: (isFocused) => ({
    fontSize: 12,
    color: isFocused ? '#FFD0EC' : '#666666',
    marginTop: 6
  })
})
