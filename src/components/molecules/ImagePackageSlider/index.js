import { Text, StyleSheet, View, Modal } from 'react-native'
import React, { Component } from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import { SliderBox } from "react-native-image-slider-box";
import { responsiveHeight, responsiveWidth } from '../../../utils';

export default class ImagePackageSlider extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         openImage: false,
         previewImage: false,
      }
    }

    clickPreview =  (index) => {
        this.setState({
            openImage: true,
            previewImage: [
                {
                    url: '',
                    props: {
                        source: this.props.imagesPackage[index]
                    }
                }
            ]
        })
    }

  render() {
    const { imagesPackage } = this.props
    const { openImage, previewImage } = this.state
    return (
      <View>
        <SliderBox 
            images={imagesPackage} 
            //autoplay 
            circleLoop
            sliderBoxHeight={responsiveHeight(200)}
            ImageComponentStyle={styles.imageSlider}
            dotStyle={styles.dotStyle}
            dotColor={'#FFD0EC'}
            imageLoadingColor={'#F0F0F0'}
            onCurrentImagePressed={(index) => this.clickPreview(index)}
        />
        <Modal visible={openImage} transparent={true}>
            <ImageViewer 
                imageUrls={previewImage} 
                backgroundColor='black'
                onClick={() => this.setState({openImage: false})}
                enableSwipeDown
                onSwipeDown={() => this.setState({openImage: false})}
                />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    imageSlider: {
        marginTop: 15,
        width: responsiveWidth(200),
        //marginBottom: 15, nda jdi.. dp container di vendor detail yg musti se kurang mar biar jo
    }
})