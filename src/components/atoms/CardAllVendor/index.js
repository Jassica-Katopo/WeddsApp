import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import { connect } from 'react-redux'

//{allVendor.name}
const CardAllVendor = ({allVendor, navigation}) => {
  //console.log("all vendor: ", id)

  return (
    
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles. imageAndText}>
        <Image source = {{uri: allVendor.image}} style={styles.imageVendor}/>
        <Text style={styles.text}>{allVendor.name}</Text>
        </View>
        
        <TouchableOpacity activeOpacity={0.7}>
          <Text 
            style={styles.textDetail} 
            onPress={() => navigation.navigate('VendorDetail', {allVendor})}
            >Detail {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CardAllVendor

const styles = StyleSheet.create({
  imageVendor: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
    borderRadius: 7,
  },
  containerWrapper: {
    marginBottom: 15,
  },
  /*
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'yellow',
    marginVertical: 5,
    padding: 5,
    borderRadius: 7,
    
  },
  */
  text: {
    //backgroundColor: 'yellow',
    paddingLeft: 10,
    color: 'black'
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    //marginHorizontal: 25,
    //borderColor: '#BAE7D8',
    //borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    //marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textDetail: {
    textDecorationLine: 'underline',
    color: '#FFD0EC'
  },
  imageAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})