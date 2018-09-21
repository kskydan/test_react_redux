import { fetchUser } from "./usersActions";
import { fetchComments } from "./commentsActions";

// posts actions
export const POSTS_REQUEST = "POSTS_REQUEST"
export const POSTS_SUCCESS = "POSTS_SUCCESS"
export const POSTS_ERROR = "POSTS_ERROR"
// post actions
export const POST_REQUEST = "POST_REQUEST"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_ERROR = "POST_ERROR"

function fetchPostsRequest() {
  return {
    type: POSTS_REQUEST
  }
}

function fetchPostsSuccess(posts) {
  return {
    type: POSTS_SUCCESS,
    payload: posts
  }
}

function fetchPostsError(error) {
  return {
    type: POSTS_ERROR,
    payload: error
  }
}

function fetchPostRequest() {
  return {
    type: POST_REQUEST
  }
}

function fetchPostSuccess(post) {
  return {
    type: POST_SUCCESS,
    payload: post
  }
}

function fetchPostError(error) {
  return {
    type: POST_ERROR,
    payload: error
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest())
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (res.status === 200) {
          return res;
        }
        else {
          throw new Error('Posts NOT fetched!');
        }
      })
      .then(res => res.json())
      .then(data => dispatch(fetchPostsSuccess(data)))
      .catch(err => dispatch(fetchPostsError(err.message)))
  }
}

export const fetchPost = (postId) => {
  return (dispatch) => {

    dispatch(fetchPostRequest())

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => {
        if (res.status === 200) {
          return res;
        }
        else {
          throw new Error('Post NOT fetched!');
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.userId) {
          fetchUser(data.userId)(dispatch)
          return data
        }
        else {
          new Error('User Not loaded!')
        }
      })
      .then(data => {
        if (data && data.id) {
          fetchComments(data.id)(dispatch)
          return data
        }
        else {
          new Error('Comments Not loaded!')
        }
      })
      .then(data => dispatch(fetchPostSuccess(data)))
      .catch(err => dispatch(fetchPostError(err.message)))
  }
}
