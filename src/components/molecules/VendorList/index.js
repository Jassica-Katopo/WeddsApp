import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'
import { CardVendor } from '../../atoms'
import { connect } from 'react-redux'

const VendorList = ({getVendorLoading, getVendorResult}) => {
    //console.log("Data vendor : ", getVendorResult)
  return (
    <View style={styles.container}>
        
        {getVendorResult ? (Object.keys(getVendorResult).map((key) => {
            return (
                <CardVendor vendor={getVendorResult[key]} key={key} id={key}/>
                //<Text>{vendor.name}</Text>
            )
        }))
        : getVendorLoading 
        ? (<View style={styles.loading}><ActivityIndicator color={'#F0F0F0'}/></View>) 
        : (<Text>data kosong</Text>)}
         
    </View>
  )
}

const mapStateToProps = (state) => ({
    getVendorLoading: state.VendorReducer.getVendorLoading,
    getVendorResult: state.VendorReducer.getVendorResult,
})

export default connect(mapStateToProps, null)(VendorList)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loading: {
        flex: 1,
        marginTop: 10,
        marginBottom: 30,
    }
})