import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => async dispatch => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts = await posts.json()
    dispatch({
        type: FETCH_POSTS,
        payload: posts
    })
}

export const createPost = postData => async dispatch => {
    const post = {
        title: postData.title,
        body: postData.body
    }
    let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    data = await data.json()

    dispatch({
        type: NEW_POST,
        payload: data
    })
}