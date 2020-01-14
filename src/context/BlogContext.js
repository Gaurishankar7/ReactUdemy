import React, {useReducer} from 'react'
import CreateDataContext from './CreateDataContext'

const BlogContext = React.createContext();

const blogReducer= (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}];
            default:
                return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost'});
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

export const {Context, Provider} = CreateDataContext(
    blogReducer,
    { addBlogPost },
    []
);