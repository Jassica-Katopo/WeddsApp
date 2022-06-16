import { Text, StyleSheet, View, Image, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { DummyAllVendor } from '../../data'
import { responsiveHeight, responsiveWidth, getData, numberWithCommas } from '../../utils'
import { IconWa, IconMap} from '../../assets'
import { Gap, ImagePackageSlider, AllPackageList, Button, InputDesc, TextInput } from '../../components'
import { connect } from 'react-redux'
import { getDetailVendor } from '../../actions/VendorAction'
// ini yg getDetailVendor tu gambar sto
import { AddToChecklist } from '../../actions/ChecklistAction'

class VendorDetail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      vendor: this.props.route.params.allVendor,
      images: this.props.route.params.allVendor.image,
      imagesPackage: this.props.route.params.allVendor.imagePackage,
      // dari admin pa tita nnti so nda usah pake aray. supaya dsini dp aray smo hapus
      //packagesVendor: this.props.route.params.allVendor.packages,
      //form -> nda pake form
      //uid: "" -> mungkin perlu sto pas smo add to checklist
      description: "",
      uid: "",
    }
  }

  //componentDidMount() {
    //get detail liga/vendor -> nda pake itu trg itu cma dp logo gambar jenis vendor
    //const {vendor} = this.state
    //this.props.dispatch(getDetailVendor(vendors.vendor)) vendors.vendor klo nd slh
  //}

  componentDidUpdate(prevProps){
    const { saveChecklistResult } = this.props
    if(saveChecklistResult && prevProps.saveChecklistResult !== saveChecklistResult) {
      this.props.navigation.replace("Checklist")
    }
  }

  //add to checklist -> pas user klik add to check list
  addToChecklist = () => {
    const { description } = this.state

    getData('user').then((res) => {
      if(res){
        // simpan uid local storage ke state
        this.setState({
          uid: res.uid
        })
        //validasi form kalo user btul" ada isi
        if(description){
          // hubungkan ke action (ChecklistAction/AddToChecklist)
          this.props.dispatch(AddToChecklist(this.state))
          //console.log("Desc : ", description)
        }else{
          Alert.alert('Error', 'Description Cannot Be Empty');
        }

      }else{
        Alert.alert('Error', 'Please Sign In before Add To Checklist');
        this.props.navigation.replace('SignIn')
      }
    })
  }

  render() {
    const {navigation, saveChecklistLoading} = this.props
    const { vendor, images, imagesPackage, description } = this.state
    return (
      <View style={styles.page}>
        
        <ImagePackageSlider imagesPackage={imagesPackage}/>
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileWrapper}>
            <Gap height={10}/>
            <Image source = {{uri: images}} style={styles.imageVendor}/>
            <Text style={styles.textNameVendor}>{vendor.name}</Text>
            <Gap height={5}/>
            <View style={styles.whatsappWrapper}>
              <IconWa/>
              <Gap width={5}/>
              <Text style={styles.textWhatsapp}>{vendor.phoneNumber}</Text>
            </View>
            <View style={styles.addressWrapper}>
              <IconMap/>
              <Gap width={5}/>
              <Text style={styles.textAddress}>{vendor.address}</Text>
            </View>
            
          </View>

          <View style={styles.line}/>
          
          <Gap height={15}/>
          {/*test */}
          <View style={styles.packageWrapper}>
            <View style={styles.nameAndPrice}>
              <Text style={styles.textPackageName}>{vendor.namePackage}</Text>
              <Text style={styles.packageName}>Rp. {numberWithCommas(vendor.packagePrice)}</Text>
            </View>
            <Gap height={5}/>
          <Text style={styles.textDescription}>{vendor.description}</Text>
          </View>
          
          {/*tambah form keterangan*/}
          {/*
          <View style={styles.inputDesc}>
          <InputDesc 
            label="Description" 
            textarea 
            fontSize={14} 
            value={description}
            onChangeText={(description) => this.setState({description})}
            
          />
          </View>
          */}
          

          <TextInput
           title ="Name" 
           placeholder="Type your full name"
           value={description}
          onChangeText={(description) => this.setState({description})}
          />

          <Button 
            title ="Add To Checklist" 
            onPress={() => this.addToChecklist()} 
            //loading={saveChecklistLoading}
          />
          <Gap height={15}/>

          <Button 
            title ="Reserve" 
            onPress={() => this.props.navigation.navigate('Reserve', {vendor})} 
            //loading={saveChecklistLoading}
          />
          <Gap height={15}/>
          
          {/*
          console.log("namePackage : ", namePackage)
          <ScrollView showsVerticalScrollIndicator={false}>
            <AllPackageList vendorPackage={vendorPackage}/>
            <Gap height={10}/>
          </ScrollView>
          */}

          {/*<Text>{vendorPackage.namePackage}</Text>*/}
          {/*<Image source = {imagesPackage.imagePackage['']} style={styles.imageVendor}/>*/}
          {/*<Text>{packagesVendor.namePackage}</Text>*/}

          
          </ScrollView>
        </View>
        
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  //getDetailVendorResult: state.VendorReducer.getDetailVendorResult,

  saveChecklistLoading: state.ChecklistReducer.saveChecklistLoading,
  saveChecklistResult: state.ChecklistReducer.saveChecklistResult,
  saveChecklistError: state.ChecklistReducer.saveChecklistError,
}) 
//mapStateToProps taru ddlm connect bru kse koma null
 


export default connect(mapStateToProps, null)(VendorDetail)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFD0EC',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    //540
    height: responsiveHeight(490),
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  imageVendor: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
    borderRadius: 7,
  },
  whatsappWrapper: {
    flexDirection: 'row',
  },
  textWhatsapp: {
    fontSize: 14,
    color: 'black'
  },
  addressWrapper: {
    flexDirection: 'row',
  },
  textAddress: {
    fontSize: 14,
    color: 'black'
  },
  textNameVendor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  profileWrapper: {
    alignItems: 'center',
  },
  line: {
    borderWidth: 0.5,
    marginTop: 5,
    marginHorizontal: 30,
    color: 'black'
  },
  textPackageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  packageName: {
    fontSize: 14,
    color: 'black',
},
packageWrapper: {
  marginHorizontal: 30,
},
nameAndPrice: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
inputDesc: {
  marginHorizontal: 30,
  marginVertical: 10,
}
})