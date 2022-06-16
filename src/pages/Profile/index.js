import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { DummyProfile, DummyMenu } from '../../data'
import { responsiveHeight, responsiveWidth, getData } from '../../utils'
import { IconWa, IconMap, defaultImage } from '../../assets'
import { Gap, ListMenuProfile } from '../../components'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //profile: DummyProfile,
       profile: false,
       menus: DummyMenu,
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      console.log("komponen dipasang")
      this.getUserData()
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  //mo tampilkan data user di profile
  getUserData = () => {
    getData('user').then(res => {
      const data = res
      
      if(data){
        this.setState({
          profile: data
        })
      }else {
        this.props.navigation.replace('SignIn')
      }
    })
  }

  render() {

    const { profile, menus } = this.state

    //cek dp isi apa"
    //console.log("Profile: ", profile)

    return (
      <View style={styles.page}>
        <View style={styles.container}>

          <Image 
            //kalo ada avatar tampilkan avatar kalo nda ada tampilkan default image
            source ={profile.avatar ? {uri: profile.avatar} : defaultImage} 
            style={styles.profilePicture}
          />

          <Gap height={5}/>
          <View style={styles.profileDetail}>
            <Text style={styles.textName}>{profile.name}</Text>
            <Gap height={5}/>

            <View style={styles.whatsappWrapper}>
              <IconWa/>
              <Gap width={5}/>
              <Text style={styles.textWhatsapp}>{profile.whatsapp}</Text>
            </View>

            <View style={styles.addressWrapper}>
              <IconMap/>
              <Gap width={5}/>
              <Text style={styles.textAddress}>{profile.address}</Text>
            </View>
            
          </View>
            <Gap height={20}/>
            <ListMenuProfile menus={menus} navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFD0EC',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(540),
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  profilePicture: {
    height: responsiveHeight(140),
    width: responsiveWidth(140),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: -responsiveWidth(70),
  },
  profileDetail: {
    marginTop: 10,
    alignItems: 'center',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  whatsappWrapper: {
    flexDirection: 'row',
  },
  textWhatsapp: {
    fontSize: 14,
    color: 'black',
  },
  addressWrapper: {
    flexDirection: 'row',
  },
  textAddress: {
    fontSize: 14,
    color: 'black',
  },
 
})