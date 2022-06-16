import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, numberWithCommas } from '../../../utils'
import { getData } from '../../../utils'

//{allVendor.name}
const CardAllPackage = ({allVendor, vendorPackage, navigation}) => {

  //add to checklist -> pas user klik add to check list
  addToChecklist = () => {
    //const yg form -> nda pake
    getData('user').then((res) => {
      if(res){

        //simpan uid ke state
        //nda yakinn ini nntau mo taru di VendorDetail ato ddlm CardAllPackage ahhhhh :'(
      }else {
        Alert.alert('Error', 'Please Sign In Before Add To Checklist')
        this.props.navigation.replace('SignIn')
      }
    })
  }

  return (
    <View style={styles.containerWrapper}>
        <View style={styles.container}>
            <View style={styles.nameAndPriceWrapper}>
                <Text style={styles.textPackageName}>{vendorPackage.namePackage}</Text>
                <Text style={styles.textPackagePrice}>Price: Rp. {numberWithCommas (vendorPackage.packagePrice)}</Text>
            </View>
            <Text style={styles.textPackagePrice}>Description: </Text>
            <Text style={styles.textDescription}>{vendorPackage.description}</Text>
            
            <TouchableOpacity activeOpacity={0.7}>
            <Text 
              style={styles.textAddToChecklist} 
              onPress={() => this.addToChecklist}
              >Add To Checklist</Text>
            </TouchableOpacity>
        </View>
    </View>
    /*
    
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles. imageAndText}>
          <Image source = {allVendor.image} style={styles.imageVendor}/>
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
    */
  )
}

export default CardAllPackage


const styles = StyleSheet.create({
  
  nameAndPriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPackageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  packagePrice: {
    fontSize: 16,
    color: 'black'
  },
  textDescription: {
    fontSize: 13,
    color: 'black'
  },
  containerWrapper: {
    marginBottom: 15,
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
    marginHorizontal: 20,
    //marginTop: 10,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center'
  },
  textAddToChecklist: {
      backgroundColor: '#FFD0EC',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignSelf: 'center',
      borderRadius: 5,
      marginTop: 10,
  },
  textPackagePrice: {
    fontSize: 16,
    color: 'black',
  }
})