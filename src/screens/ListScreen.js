import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { render } from 'react-dom';

const ListScreen = () => {
    // return <Text> List Screen </Text>;
    const friend = [
      { name: 'Friend #1', key: '1', age: 20}, 
      { name: 'Friend #2' , key: '2', age: 20}, 
      { name: 'Friend #3' , key: '3', age: 20}, 
      { name: 'Friend #4' , key: '4', age: 20}, 
      { name: 'Friend #5' , key: '5', age: 20}, 
      { name: 'Friend #6' , key: '6', age: 20}, 
      { name: 'Friend #7' , key: '7', age: 20}, 
      { name: 'Friend #8' , key: '8', age: 20}, 
      { name: 'Friend #9' , key: '9', age: 20},
      { name: 'Friend #10' , key: '10', age: 20}, 
      { name: 'Friend #11',  key: '11', age: 20},
    
    ];
    return (
        <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={friend}
         renderItem={( {item} ) => {
             // element === {item:{name: 'Friend #1'}, index: 0}
         return <Text style={styles.textStyle}> {item.name} - Age {item.age} </Text>;
         } } 
         />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
