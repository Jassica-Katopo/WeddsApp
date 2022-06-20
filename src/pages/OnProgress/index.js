import { StyleSheet, Text, View, TouchableOpacity, ScrollView,} from 'react-native'
import React, {Component} from 'react'
import { Header, Gap, NavigationBottom, ButtonIcon, HistoryList, Button } from '../../components'
import { DummyChecklist } from '../../data'

export default class OnProgress extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       checklists: DummyChecklist
    }
  }
  render(){
    const { checklists } = this.state
    return (
      <View style={styles.page}>
        <View style={styles.headerHistory}>
            <Text style={styles.textHistory}>History</Text>
        </View>
        <HistoryList checklists={checklists}/>
        <Button title="chat" onPress={() => this.props.navigation.navigate('Chat')}/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page : {
    flex: 1,
    backgroundColor: 'white',
  },
  headerHistory: {
    backgroundColor: '#FFD0EC',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    //marginHorizontal: 30,
    marginBottom: 5,
  },
  textHistory: {
    fontSize: 20,
    color: 'black',
    marginLeft: 25,
  }
  
})