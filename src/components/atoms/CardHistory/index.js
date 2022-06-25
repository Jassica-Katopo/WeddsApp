import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight, numberWithCommas } from '../../../utils'
import { IconCancel } from '../../../assets'
import Button from '../Button'
import { connect } from 'react-redux'
import { deleteChecklist } from '../../../actions/ChecklistAction'
import ButtonCancel from '../ButtonCancel'
import ButtonNext from '../ButtonNext'


const CardHistory = ({checklist, navigation, checklistMain, id, dispatch}) => {
    {/*
      const hapusChecklist = () => {
      dispatch(deleteChecklist(id, checklistMain, checklist))
      }
  */}
    

  return (
    <View style={styles.container} >
        <Text style={styles.textDate}>{checklistMain.date}</Text>
        <View style={styles.containWrapper}>
            
            <View style={styles.imageAndDescWrapper}>
                <Image source={{uri : checklist.productChecklist.image}} style={styles.imageVendor}/>

                <View style={styles.description}>
                    <Text style={styles.vendorName}>{checklist.productChecklist.name}</Text>
                    {/* cuma tambah packages[0] krna ada pake array mungkin nnti nda mo pake array krna
                    user cuma musti pilih kan 1 jenis paket */}
                    <Text style={styles.packageName}>{checklist.productChecklist.namePackage}</Text>
                    <Text style={styles.packageName}>Rp. {numberWithCommas(checklist.productChecklist.packagePrice)}</Text>
                    
                    <View style={styles.wd}>
                        <Text style={styles.packageName}>Wedding Date: </Text>
                        <Text style={styles.packageName}>{checklist.description}</Text>
                        
                    </View>
                    
                    <View>
                        {checklistMain.isReserve === true ? (
                            <Text style={{color: '#E9D35F', marginTop: 8}}>Waiting for approval</Text>
                        ) : null}
                        {checklistMain.isApprove === true ? (
                            <Text style={{color: '#5AD71F', marginTop: 8}}>Reservation Approved</Text>
                        ) : null}
                        
                    </View>
                    
                </View>
            </View>
            {/*
            <TouchableOpacity 
                style={styles.cancel} 
                activeOpacity={0.6}
                onPress={() => hapusChecklist()}
            >
                <IconCancel/>
            </TouchableOpacity>
            //ini so ganti jadi button cancel jdi pas cancel dia ta hpus smua.
            */}
        </View>
            {/* Button Cancel nda pke
              <ButtonCancel
                title='Cancel'
                activeOpacity={0.6}
                onPress={() => hapusChecklist()}
              />
          */} 
        
    </View>
  )
}

export default connect()(CardHistory)

const styles = StyleSheet.create({
    container: {
        
        marginTop: 10,
        //justifyContent:'space-between',
        backgroundColor: 'white',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        marginHorizontal: 20,
        borderRadius: 7,
        
        paddingBottom: 10,
        marginBottom: 15,
        //backgroundColor: 'yellow'
    },
    containWrapper:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        //backgroundColor: 'yellow'
        justifyContent: 'space-between',
    },
    imageAndDescWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageVendor: {
        width: responsiveWidth(50),
        height: responsiveHeight(50),
        borderRadius: 7,
    },
    cancel: {
        //flex: 1,
        //alignItems: 'flex-end',
        backgroundColor: 'white',
        padding: 7,
        //paddingHorizontal: 5,
        //marginHorizontal: 20,
        //marginLeft: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
    },
    description: {
        marginLeft: 20,
    },
    vendorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    packageName: {
        fontSize: 14,
        color: 'black',
    },
    /* textButtonReserve: {
        backgroundColor: '#FFD0EC',
        color: 'white',
        paddingVertical: 7,
        paddingHorizontal: 30,
        fontWeight: 'bold',
        borderRadius: 7,
    }*/
    button: {
        marginTop: 10,
        flexDirection: 'row',
        //backgroundColor:'yellow',
        justifyContent: 'space-around',
    },
    wd: {
        flexDirection: 'row',
    },
    textDate: {
        marginLeft: 10,
        marginTop: 10,
    }
})

{/*
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils';
import Gap from '../Gap';

const CardHistory = ({checklist}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{checklist.checklistDate}</Text>
      <Gap height={10}/>
      {checklist.checklists.map((history) => {
          return(
            <View key={history.id} style={styles.vendorWrapper}>

                <Image source = {history.image} style={styles.imageVendor}/>

                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{history.name}</Text>
                    <Text style={styles.text}>{history.packages[0].namePackage}</Text>
                    <Text style={styles.text}>Rp. {numberWithCommas (history.packages[0].packagePrice)}</Text>
                </View>
                
            </View>
          )
      })}
      
      <Gap height={15}/>
      <View style={styles.status}>
        <Text>Status: {checklist.status}</Text>
      </View>
      
      
    </View>
  );
}

export default CardHistory

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
        elevation: 3,
        padding: 15,
        borderRadius: 7,
        marginBottom: 15,
    },
    imageVendor: {
        width: responsiveWidth(50),
        height: responsiveHeight(50),
        borderRadius: 7,
    },
    vendorWrapper: {
        flexDirection: 'row',
    },
    textWrapper:{
        marginLeft: 15,
    },
    text: {
        color: 'black',
    },
    status: {
        alignItems: 'flex-end',
    }
})
*/}
