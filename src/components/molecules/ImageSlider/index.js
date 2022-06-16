import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { 
    HeaderHomeImage, 
    HeaderBridalImage, 
    HeaderCateringImage,
    HeaderPhotographerImage,
    HeaderVenueImage,
    HeaderWoImage
 } from '../../../assets'
 import { responsiveHeight, responsiveWidth } from '../../../utils';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                HeaderHomeImage, 
                HeaderBridalImage, 
                HeaderCateringImage,
                HeaderPhotographerImage,
                HeaderVenueImage,
                HeaderWoImage
            ]
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox 
            images={this.state.images} 
            autoplay 
            circleLoop
            sliderBoxHeight={responsiveHeight(150)}
            ImageComponentStyle={styles.slider}
            dotStyle={styles.dotStyle}
            dotColor={'#FFD0EC'}
            imageLoadingColor={'#F0F0F0'}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -20,
    },
    slider: {
        borderRadius: 10,
        width: responsiveWidth(320),
    },
    dotStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
    }
})