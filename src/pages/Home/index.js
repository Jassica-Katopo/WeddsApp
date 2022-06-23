import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import React, {Component, PureComponent} from 'react'
import { Header, Gap, NavigationBottom, ButtonIcon, ImageSlider, VendorList, AllVendorList, Button } from '../../components'
import { connect } from 'react-redux'
import { getVendor } from '../../actions/VendorAction'
import { getAllVendor } from '../../actions/AllVendorAction'

class Home extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const { idVendor, keyword } = this.props;
      this.props.dispatch(getVendor());
      this.props.dispatch(getAllVendor(idVendor, keyword));

      //console.log("masuk kesini did mount : ", idVendor)
      //disini msh nda mso dp id vendor dohh so pastiu harusnya so maso
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps){
    const { idVendor, keyword } = this.props

    if(idVendor && prevProps.idVendor !== idVendor) {
      this.props.dispatch(getAllVendor(idVendor, keyword));
    }
    //console.log("masuk kesini did update : ", idVendor)

    if(keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getAllVendor(idVendor, keyword));
    }
  }

  render() {
    const { navigation, name, keyword } = this.props
    console.log("ID Vendor : ", this.props.idVendor)
    console.log("keyword : ", keyword)
    return (
      <View style={styles.page}>
        <Header navigation={navigation} page="Home"/>
        <ImageSlider/>

        <Gap height={10}/>
        <Text style={styles.label}>Select Vendor Type</Text>
        <View style={styles.selectVendorType}>
          {/* VendorList nda pke navigation krna ttp di page yg sma*/}
          <VendorList/>
        </View>

        <Gap height={20}/>
        {keyword ? 
        <Text style={styles.label}>
          Search : <Text>{keyword}</Text>
        </Text> 
        : <Text style={styles.label}>
          Select <Text>Vendor </Text>
          {name ? name : " "}
        </Text>
        }
        
        

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.selectAllVendorType}>
          <AllVendorList navigation={navigation}/>
        </View>
        {/*<Button title="View All Vendor"/>*/}
        <Gap height={10}/>
        </ScrollView>
        
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  idVendor: state.AllVendorReducer.idVendor,
  name: state.AllVendorReducer.name,
  keyword: state.AllVendorReducer.keyword
})

export default connect(mapStateToProps, null)(Home)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  selectVendorType: {
    marginHorizontal: 30,
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 30,
  },
  iconVendor: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 40,
    flexWrap: 'wrap',
    marginLeft: 40,
    marginRight: 40,
  },
  selectAllVendorType: {
    marginHorizontal: 30,
    marginTop: 15,
  },
})

/*
const Home = ({onPress, navigation}) => {
  return (
    <View style={styles.page}>
      <Header/>
      <ImageSlider/>
      <View style={styles.selectVendorType}>
        <Text style={styles.label}>Select Vendor Type</Text>
        <VendorList/>
      </View>
      

      <View style={styles.iconVendor}>
        <ButtonIcon title= "Photographer" onPress={() => navigation.navigate ('Photographer')}/>
        <ButtonIcon title= "Bridal" onPress={() => navigation.navigate ('Bridal')}/>
        <ButtonIcon title= "Catering" onPress={() => navigation.navigate ('Catering')}/>
        <ButtonIcon title = "Venue" onPress={() => navigation.navigate ('Venue')}/>
        <ButtonIcon title = "WO" onPress={() => navigation.navigate ('WO')}/>
      </View>

    </View>
    
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
*/