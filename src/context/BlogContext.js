import React, { useReducer } from 'react'
import CreateDataContext from './CreateDataContext'
import Axios from 'axios';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'edit_blogpost':
            return state.map(blogPost => {
                 return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        // await axios.post('asdasds', title,content)
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callback) {
            callback();
        }
        // callback();
    };

};

// 
/* export const BlogProvider = ({ children }) => {
    // const blogPosts = [ {title: 'Blog 1'},{title: 'Blog 2'}];
    // const [blogPosts, setBlogPosts] = useState([]);
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    // const addBlogPost = () => {
    //     setBlogPosts( 
    //         [...blogPosts,
    //              { title:  `Blog Post #${blogPosts.length + 1 }`} 
    //             ] )
    // };

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost'});
    };


    // const editBlogPost = () => {}

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
}; */

// export default BlogContext;

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content }
        });
        if (callback) {
            callback();
        }
        //  callback(); 
    };
}

export const { Context, Provider } = CreateDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'TEST POST', content: 'Test Content', id: 1 }]
);