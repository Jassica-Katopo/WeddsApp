import { View, Text } from 'react-native'
import React from 'react'
import { CardMenuProfile } from '../../atoms'

const ListMenuProfile = ({menus, navigation}) => {
  return (
    <View>
        {menus.map((menu) => {
            return <CardMenuProfile  menu={menu} key={menu.id} navigation={navigation}/>
        })}
    </View>
  )
}

export default ListMenuProfile