import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);
  return <View>
    <Text style={styles.text}>Hi React Demo</Text>
    <Button 
      title='Go to Components Demo' 
      onPress={ () => navigation.navigate('ComponentScreen')}
    />

    <Button 
      title='Go to List Demo'
      onPress={() => navigation.navigate('List')}
    />
    <Button 
      title='Go to Image Screen'
      onPress={() => navigation.navigate('ImgView')}
    />
    <Button 
      title='Go to Counter Screen'
      onPress={() => navigation.navigate('Counter')}
    />
    <Button 
      title='Go to Color Screen'
      onPress={() => navigation.navigate('Colors')}
    />
    <Button 
      title='Go to Square Screen'
      onPress={() => navigation.navigate('Square')}
    />
    <Button 
      title='Go to Text Screen'
      onPress={() => navigation.navigate('TextScreen')}
    />

    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo </Text>
      <Text>Go to List Demo </Text>
      <Text>Go to List Demo </Text>
    </TouchableOpacity> */}
  </View> 
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


 