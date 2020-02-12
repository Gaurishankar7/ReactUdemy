import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, Button, TouchableOpacity, navigation } from 'react-native'
import { Context } from '../context/BlogContext'
// import { NavigationActions } from 'react-navigation';
import BlogPostForm from '../Components/BlogPostForm'


const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    return <BlogPostForm
        onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate('Index'))
        }} />
};

const styles = StyleSheet.create({

});

export default CreateScreen;