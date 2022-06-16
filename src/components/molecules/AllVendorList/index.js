import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { CardAllVendor } from '../../atoms'
import { connect } from 'react-redux'
import { getAllVendor } from '../../../actions/AllVendorAction'

const AllVendorList = ({getAllVendorLoading, getAllVendorResult, navigation, getAllVendorError}) => {
  //console.log("Dataaa : ",getAllVendorResult )
  return (
    <View>
    {getAllVendorResult ? (Object.keys(getAllVendorResult).map((key) => {
        return <CardAllVendor key={key} allVendor={getAllVendorResult[key]} navigation={navigation} id={key} />    
      }))
        : getAllVendorLoading 
        ? (<View style={styles.loading}><ActivityIndicator color={'#F0F0F0'}/></View>) 
        : getAllVendorError ? (<Text>{getAllVendorError}</Text>) : (<Text>No vendors yet...</Text>)}
    </View>
  )
}

const mapStateToProps = (state) => ({
  getAllVendorLoading: state.AllVendorReducer.getAllVendorLoading,
  getAllVendorResult: state.AllVendorReducer.getAllVendorResult,
  getAllVendorError: state.AllVendorReducer.getAllVendorError
})

export default connect(mapStateToProps, null)(AllVendorList)

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
})