import * as api from '../api';

// action creators - function that return actions
export const getPosts = () => async (dispatch) => {
    //async (dispatch) => is used to add thunk so that we can do async calls
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch (err) {
        console.log(err);
    }
}