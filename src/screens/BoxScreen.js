import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return(
    <View style={style.viewStyle}>
        <Text style={style.textOneStyle} >Box Screen here</Text>
        <Text style={style.textTwoStyle} >Child #2 here</Text>
        <Text style={style.textThreeStyle} >Child #3 here</Text>
    </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'flex-end'
        // flexDirection: 'row',
        alignItems: 'center',
        height: 200,
        // justifyContent: 'flex-start'
        // flexDirection: 'row'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin: 20,
        // flex: 4,
        alignSelf: 'stretch'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 4
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 20,
        // right: 20
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2
    }
});


export default BoxScreen;
