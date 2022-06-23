import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {CardNumber} from '../../components'
import {dummyProfile} from '../../data'
import {Button} from '../../components'
import { numberWithCommas, getData } from '../../utils'

export default class Reserve extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         profile: false,
         price: this.props.route.params.price,
      }
    }


    componentDidMount(){
      this.getUserData()
    }

    
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
    const { profile, price, isReserve } = this.state
    //cek klo data profile so mso
    //console.log("Profile : ", profile)
    const { navigation } = this.props

    return (
      <View style={styles.pages}>
        <View style={styles.container}>
        <Text style={styles.textBold}>Can this number be contacted ?</Text>
        <CardNumber profile={profile} navigation={navigation}/>

        <View style={styles.price}>
            <Text style={styles.textPrice}>Price : </Text>
            <Text style={styles.textPrice}>Rp. {numberWithCommas(price)}</Text>
        </View>
        <View style={styles.buttonPay}>
        <Button title="Make A Reservation" onPress={() => this.onReserve()} />
        </View>
        

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    textBold: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPrice: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginVertical: 20,
        marginHorizontal: 5,
    },
    buttonPay: {
        //backgroundColor: 'yellow',
        marginTop: 30,
    }
})