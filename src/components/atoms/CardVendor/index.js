import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import { connect } from 'react-redux'
import { getAllVendorByVendor } from '../../../actions/AllVendorAction'

const CardVendor = ({vendor, id, dispatch}) => {
    //console.log("vendor type: ", id)
    // sudah so maso id
    const toAllVendorByVendor = (id, name) => {
        //ke allvendor action
        dispatch(getAllVendorByVendor(id, name))
        // navigate nda pake
    }

  return (
    <TouchableOpacity 
        style={styles.container} 
        activeOpacity={0.7} 
        onPress={() => toAllVendorByVendor(id, vendor.name)}
        >
        <View style={styles.itemWrapper}>
            <Image source={{uri: vendor.icon}} style={styles.logoIcon}/>
            <Text style={styles.textVendorName}>{vendor.name}</Text>
        </View>
        
    </TouchableOpacity>
  )
}

export default connect()(CardVendor)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 8,
        padding: 5,
    },
    logoIcon: {
        width: responsiveWidth(45),
        height: responsiveHeight(45),
    },
    textVendorName: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 5,
        color: 'black',
    },
    itemWrapper: {
        alignItems: 'center',
    }
})