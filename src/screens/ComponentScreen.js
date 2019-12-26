
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {

    const name = 'Gaurishankar'

    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen new </Text>
    <Text style={styles.subHeader}>This is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 30
    }
});

export default ComponentScreen;