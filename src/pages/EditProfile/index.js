import { Text, StyleSheet, View, ScrollView, Image, Alert } from 'react-native'
import React, { Component } from 'react'
//dummy profile so nda pake
import { DummyProfile } from '../../data'
import { Button, TextInput, Gap } from '../../components'
import { responsiveHeight, responsiveWidth, getData, } from '../../utils'
import { defaultImage } from '../../assets'
import { launchImageLibrary } from 'react-native-image-picker'
import { updateProfile } from '../../actions/ProfileAction'
import { connect } from 'react-redux'


class EditProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      uid: '',
      name: '',
      whatsapp: '',
      address: '',
      //profile: DummyProfile (so nda perlu dummy)
      avatar: false,
      avatarForDB: '',
      oldAvatar: '',
      updateAvatar: false,
    }
  }

  //panggil getUserData for mo tampilkan
  componentDidMount(){
    this.getUserData()
  }

  componentDidUpdate(prevProps){
    const { updateProfileResult } = this.props
    if(updateProfileResult && prevProps.updateProfileResult !== updateProfileResult) {
      Alert.alert("Success", "Profile Updated")
      this.props.navigation.replace("MainApp")
    }
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res
      this.setState({
        uid: data.uid,
        name: data.name,
        whatsapp: data.whatsapp,
        address: data.address,
        avatar: data.avatar,
        oldAvatar: data.avatar,
      })
    })
  }

  getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 400, maxHeight: 400, includeBase64: true, selectionLimit: 1, cameraType: 'front'}, 
      (response) => {
        //console.log('respons, ', response);
        if(response.didCancel || response.errorCode || response.errorMessage){
          Alert.alert("Error", "Upload Canceled")
        }else {
          // const source untuk menampilkan foto
          // fucking .assets[0]
          const source = response.assets[0].uri;
          //console.log(source)
          //cek
          //console.log(source) => nda ta tulis jelas dp data gambar cuma ta tulis undefined
          // const fileString untuk diupload ke firebase
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`

          //cek masih undefined di firebase
          //console.log("Photo : ", response)

          this.setState({
            avatar: source,
            avatarForDB: fileString,
            updateAvatar: true,
          })
        }
        //console.log('respons, ', response);
        //di response so ada dp file base65 dg uri mar kyp nda mo ta tampil cuma ta tulis undefined :')
      }
    )
  }

  onSubmit = () => {
    const { profile, name, whatsapp, address, avatar, oldAvatar } = this.state
    //avatar biar nda isi npp
    if(name && whatsapp && address) {
      // dispatch update
      this.props.dispatch(updateProfile(this.state))
    }else {
      Alert.alert("Error", "Name, phone number or address cannot be ampty")
    }
  }

  render() {
    const { profile, name, whatsapp, address, avatar, oldAvatar } = this.state
    const { updateProfileLoading } = this.props
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.changePhoto}>
            <View style={styles.wrapperPhoto}>
              <Image 
                source={
                  avatar 
                    ? {uri: avatar}
                    : defaultImage
                } 
                style={styles.changeAvatar}
              />
              <Gap height={15}/>
              <Button title="Change Photo" onPress={() => this.getImage()}/>
            </View>
          </View>
          <Gap height={15}/>
          <TextInput
            title ="Name" 
            placeholder="Type your full name"
            value={name}
            onChangeText={(name) => this.setState({name})}
          />
          <Gap height={15}/>
          <TextInput
            title="Phone Number"
            placeholder="Type your phone number or whatsapp number"
            value={whatsapp}
            onChangeText={(whatsapp) => this.setState({whatsapp})}
            keyboardType="number-pad"
          />
          <Gap height={15}/>
          <TextInput
            title="Address"
            placeholder="Type your address"
            value={address}
            onChangeText={(address) => this.setState({address})}
          />
          <Gap height={25}/>
          <Button title="Save Change" loading={updateProfileLoading} onPress={() => this.onSubmit()}/>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  updateProfileLoading: state.ProfileReducer.updateProfileLoading,
  updateProfileResult: state.ProfileReducer.updateProfileResult,
  updateProfileError: state.ProfileReducer.updateProfileError,
})
export default connect(mapStateToProps, null)(EditProfile)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  changePhoto: {
    marginTop: 30,
  },
  changeAvatar: {
    height: responsiveHeight(140),
    width: responsiveWidth(140),
    borderRadius: 20,
    alignSelf: 'center',
  },
})