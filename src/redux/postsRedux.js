

// selectors
export const getAllPosts = state => state.posts;
export const getPostById = (state, id) => state.posts.find(post => post.id === id);
export const editPost = payload => ({ type: EDIT_POST, payload });

// actions
const REMOVE_POST = 'REMOVE_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'app/posts/EDIT_POST';

// action creators
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case REMOVE_POST:
            return statePart.filter(post => post.id !== action.payload);
        case ADD_POST:
            return [...statePart, { ...action.payload }];
        case EDIT_POST:
            return statePart.map(post =>
                post.id === action.payload.id ? { ...post, ...action.payload } : post
            );
        default:
            return statePart;
    }
};

// Action creator
export const addPost = payload => ({
    type: ADD_POST,
    payload,
});

export const removePost = id => ({
    type: REMOVE_POST,
    payload: id,
});

export default postsReducer;