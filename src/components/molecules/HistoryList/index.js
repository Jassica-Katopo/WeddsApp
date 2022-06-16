import { StyleSheet,  View, ScrollView } from 'react-native'
import React from 'react'
import { CardHistory } from '../../atoms'

const HistoryList = ({checklists}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            {checklists.map((checklist) => {
            return <CardHistory checklist={checklist} key={checklist.id}/>
            })}
        </View>
    </ScrollView>
  )
}

export default HistoryList

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    }
})