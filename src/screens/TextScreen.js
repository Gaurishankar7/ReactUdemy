import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Text} from 'react-native'
// import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {

    const [password, setPassword]=useState('')
    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
            />
            {/* <Text>My Name is { name }</Text> */}
            {password.length < 4 ? <Text>Password must be 4 char</Text> : null }
            
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15, 
        borderColor: 'black',
        borderWidth: 1 
    }
});

export default TextScreen;