import { Text, StyleSheet, View, Image,  } from 'react-native'
import React, { Component } from 'react'
import { DummyChecklist } from '../../data'
import { Button, Checklist_List, InnerChecklist_List, Header2, HistoryList } from '../../components'
import { numberWithCommas, getData } from '../../utils'
import { connect } from 'react-redux'
import { getListChecklist } from '../../actions/ChecklistAction'
import {CardNumber} from '../../components'

class OnProgress extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       profile: false,
       //price: this.props.route.params.price,
    }
  }

  componentDidMount(){
    getData('user').then((res) => {

      if(res){
        //user sudah login
        this.props.dispatch(getListChecklist(res.uid))
        this.setState({
          profile: res
        })
      }else{
        //user belum login dan harus navigate ke page signin
        this.props.navigation.replace("SignIn")
      }
    })
  }

  componentDidUpdate(prevProps){
    const { deleteChecklistResult } = this.props
    if(deleteChecklistResult && prevProps.deleteChecklistResult !== deleteChecklistResult) {
      getData('user').then((res) => {
        //const data = res
        if(res){
          //user sudah login
          this.props.dispatch(getListChecklist(res.uid))
          
        }else{
          //user belum login dan harus navigate ke page signin
          this.props.navigation.replace("SignIn")
        }
      })
    }
  }


  render() {
    //const { checklist } = this.state
    //const { navigation } = this.props
    const { profile } = this.state
    const{ getListChecklistResult, navigation } = this.props

    //console.log("Data Checklist : ", this.props.getListChecklistResult)

    return (
      <View style={styles.page}>
        <Header2 title="Reservation Status"/>

        {/* yg di page reserve se pindah sini jo */}
        {/*<Text style={styles.textDetails}>Can this number be contacted ?</Text>*/}
        {/*<Text style={styles.textBiasa}>Admin vendor will contact at your number</Text>*/}
        {/*<CardNumber profile={profile} navigation={navigation}/>*/}

        <Text style={styles.textDetails}>Reservation Status :</Text>
        <HistoryList {...this.props}/>

        

        

        {/*Button klo ada boleh mo ta next klo nda ada disable sbnrnya m sllu ada si dia mar biar jo*/}
        {/*
        {getListChecklistResult ? 
        <View style={styles.buttonNext}>
        <Button 
          title='View Status' 
          activeOpacity={0.6}
          //onPress={() => this.props.navigation.navigate('Reserve', {price: getListChecklistResult.price})}
          onPress={() => this.props.navigation.navigate('Status')}
        />
        </View>
        : <View style={styles.buttonNext}>
        <Button 
          title='Next' 
          activeOpacity={0.6}
          //onPress={() => this.props.navigation.navigate('Reserve')}
        />
        </View>
        }
        */}

        
        
        {/*

          yg footer sdh jo nd jdi pke.. dp total nd jdi
          dp user le kan cma mo pesan 1x for 1 vendor nd ada item" laeng

          <View style={styles.footer}>
          <View style={styles.textTotal}>
            <Text style={styles.text}>Total :</Text>
            <Text style={styles.text}>Rp. {getListChecklistResult ? numberWithCommas(getListChecklistResult.pricee) : 0}</Text>
          </View>
        </View>
         
         */}
        
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getListChecklistLoading: state.ChecklistReducer.getListChecklistLoading,
  getListChecklistResult: state.ChecklistReducer.getListChecklistResult,
  getListChecklistError: state.ChecklistReducer.getListChecklistError,

  deleteChecklistLoading: state.ChecklistReducer.deleteChecklistLoading,
  deleteChecklistResult: state.ChecklistReducer.deleteChecklistResult,
  deleteChecklistError: state.ChecklistReducer.deleteChecklistError,
})

export default connect(mapStateToProps, null)(OnProgress)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  textDetails: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonNext: {
    marginBottom: 20,
  },
  textBiasa: {
    marginHorizontal: 20,
  }
})
{/*
textTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 20,
    //borderColor: '#FFD0EC', nda jadi
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 7,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  }
*/}


{/*
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,} from 'react-native'
import React, {Component} from 'react'
import { Header, Gap, NavigationBottom, ButtonIcon, HistoryList, Button, Header2, Checklist_List } from '../../components'
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
        <Header2 title="Reservation Status"/>
        <HistoryList checklists={checklists}/>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page : {
    flex: 1,
    backgroundColor: 'white',
  },
  
})
*/}