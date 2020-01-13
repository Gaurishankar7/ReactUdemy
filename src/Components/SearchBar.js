import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={ styles.backgroundStyle }>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
            autoCorrect={false} 
            autoCapitalize='none'
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        // borderColor: 'black',
        // borderWidth:1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;

