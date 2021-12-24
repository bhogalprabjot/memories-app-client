import React from "react";
import {useSelector} from 'react-redux';


import Post from "./Post/Post";
import useStyles from './styles';

const Posts = () => {
    const post = useSelector((state)=>state.posts);
    const classes = useStyles();
    console.log(post);
    return(
        <>
            <h1>POSTS</h1>
            <Post/>
        </>
    );
}

export default Posts;