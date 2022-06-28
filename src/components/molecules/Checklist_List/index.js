import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Button, CardChecklist } from '../../atoms'

const Checklist_List = ({
  getListChecklistLoading, 
  getListChecklistResult, 
  getListChecklistError, 
  navigation
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>

      {getListChecklistResult ? (
        //getListChecklistResult.orders
        //hapus dp .orders
        Object.keys(getListChecklistResult.orders).map((key) => 
        {
          return(
            <CardChecklist 
              //getListChecklistResult.orders[key]
              //hapus .orders[key]
              checklist={getListChecklistResult.orders[key]} 
              checklistMain={getListChecklistResult}
              key={key}
              id={key}
              navigation={navigation}
            />
          )
        })
      ) : getListChecklistLoading ? (
        <View style={styles.loading}><ActivityIndicator color={'#F0F0F0'}/></View>
      ) : getListChecklistError ? (
        <Text>{getListChecklistError}</Text>
      ) : (
        <Button title="Back To Home" onPress={() => navigation.navigate('Home')}/>
        //<Text style={styles.textChecklistEmpty}>Status Empty</Text>
        
      )}

        {/*
         {checklists.map((checklist => {
          return <CardChecklist 
              checklist={checklist} 
              key={checklist.id}
            />
        }))}
        */}
        
      </View>
    </ScrollView>
    
  )
}

export default Checklist_List

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
},
textChecklistEmpty: {
  alignSelf: 'center',
},
//nd jdi mo style dp button
})