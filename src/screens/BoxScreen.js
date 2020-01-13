import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return(
    <View style={style.parentStyle}>
        {/* <Text style={style.textOneStyle} >Box Screen here</Text>
        <Text style={style.textTwoStyle} >Child #2 here</Text>
        <Text style={style.textThreeStyle} >Child #3 here</Text> */}
        <View style={style.viewOneStyle} />
        <View style={style.viewTwoStyle} />
        <View style={style.viewThreeStyle} />
    </View>
    );
};

const style = StyleSheet.create({
    // viewStyle: {
    //     borderWidth: 3,
    //     borderColor: 'black',
    //     // alignItems: 'flex-end'
    //     // flexDirection: 'row',
    //     alignItems: 'center',
    //     height: 200,
    //     // justifyContent: 'flex-start'
    //     // flexDirection: 'row'
    // },
    parentStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // textOneStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // marginVertical: 20,
    //     // marginHorizontal: 20,
    //     // margin: 20,
    //     // flex: 4,
    //     alignSelf: 'stretch'
    // },
    // textTwoStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // flex: 4
    //     // position: 'absolute',
    //     // top: 0,
    //     // bottom: 0,
    //     // left: 20,
    //     // right: 20
    //     ...StyleSheet.absoluteFillObject
    // },
    // textThreeStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // flex: 2
    // }

    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // marginTop: 50
        alignSelf: 'flex-end'
    },
    viewThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'purple',

    }

});


export default BoxScreen;
