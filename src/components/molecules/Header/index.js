import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {Component} from 'react'
import {Back1} from '../../../assets/icon'
import { Gap, ButtonTop } from '../../atoms'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import { IconSearch, IconChecklist } from '../../../assets'
import { connect } from 'react-redux'
import { saveKeywordAllVendor } from '../../../actions/AllVendorAction'

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      search: '',
    }
  }

  afterSearch = () => {
    //console.log("cek : ", this.state.search)
    const { page, navigation, dispatch } = this.props
    const { search } = this.state

    //jalankan action save keyword
    dispatch(saveKeywordAllVendor(search))

    //navigate ke home usless sih ini krna dia cma di 1 page memang nd ada di page laeng mar biar jo iko"
    if(page !== "Home"){
      navigation.navigate("Home")
    }

    //kembalikan state ke string kosong
    this.setState({
      search: ''
    })
  }

  render() {
    const { search } = this.state
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>

          {/* search input*/}
          <View style={styles.searchSection}>
            <IconSearch/>
            <TextInput 
              placeholder="Search..." 
              style={styles.textInput}
              value={search}
              onChangeText={(search) => this.setState({search})}
              onSubmitEditing={() => this.afterSearch()}
              />
          </View>
          <Gap width={10}/>
          <ButtonTop 
            icon="checklist" 
            //totalChecklist={2} 
            padding={10}
            onPress={() => navigation.navigate('Checklist')}
          />

        </View>
      </View>
    )
  }
}

export default connect()(Header)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD0EC',
    height: responsiveHeight(120),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,

  }
})

/*
const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {
        onBack && (
          <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
            <View style={styles.back}>
              <Back1/>
            </View>
          </TouchableOpacity>
        )
      }
      
      <Gap width={10}/>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCF5ED',
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
  back: {
    //backgroundColor: 'white'
  }
})
*/