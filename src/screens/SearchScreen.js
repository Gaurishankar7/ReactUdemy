import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../Components/SearchBar'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>Search Bar </Text>
    <Text> {term}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    // background: {
    //     backgroundColor: '#F0EEEE'
    // }
});

export default SearchScreen;