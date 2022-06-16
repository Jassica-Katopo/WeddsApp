import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import { CardAllVendor } from '../../atoms'
import { CardAllPackage } from '../../atoms'

// dp mapping s jadi mar dp data tllu besar jdi nda mo ta load
// sudahh
const AllPackageList = ({allVendor, vendorPackage, navigation}) => {
  return (
    <View>
      {vendorPackage.map((vendorPackage) => {
          return (
              <CardAllPackage 
                key={vendorPackage.id} 
                vendorPackage={vendorPackage} 
                navigation={navigation}
              />
          )
      })}
    </View>
  )
}

export default AllPackageList

const styles = StyleSheet.create({})