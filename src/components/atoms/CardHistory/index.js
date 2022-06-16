import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils';
import Gap from '../Gap';

const CardHistory = ({checklist}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{checklist.checklistDate}</Text>
      <Gap height={10}/>
      {checklist.checklists.map((history) => {
          return(
            <View key={history.id} style={styles.vendorWrapper}>
                {/*nd prlu history.checklists.name - klo dia 1x ba psan blh >1 mknya pke bgt klo ini 1x psan cma 1*/}
                {/* map history, index baru di text {index+1} 2.26 18:55 */}

                <Image source = {history.image} style={styles.imageVendor}/>

                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{history.name}</Text>
                    <Text style={styles.text}>{history.packages[0].namePackage}</Text>
                    <Text style={styles.text}>Rp. {numberWithCommas (history.packages[0].packagePrice)}</Text>
                </View>
                
            </View>
          )
      })}
      
      <Gap height={15}/>
      <View style={styles.status}>
        <Text>Status: {checklist.status}</Text>
      </View>
      
      
    </View>
  );
}

export default CardHistory

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        padding: 15,
        borderRadius: 7,
        marginBottom: 15,
    },
    imageVendor: {
        width: responsiveWidth(50),
        height: responsiveHeight(50),
        borderRadius: 7,
    },
    vendorWrapper: {
        flexDirection: 'row',
    },
    textWrapper:{
        marginLeft: 15,
    },
    text: {
        color: 'black',
    },
    status: {
        alignItems: 'flex-end',
    }
})