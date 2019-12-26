import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail 
            title='Forest'
             imageSource={require('../../assets/forest.jpg')}
              imgScore='Image Score-9'
         />
        <ImageDetail
             title='Beach'
              imageSource={require('../../assets/beach.jpg')}
               imgScore='Image Score-7'
        />
        <ImageDetail
         title='Mountain'
          imageSource={require('../../assets/mountain.jpg')}
           imgScore='image Score-4'
        />
        {/* <ImageDetail /> */}
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;