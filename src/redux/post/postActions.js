import axios from 'axios';
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './postTypes';


export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
export const fetchPostsSucces = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}
export const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const postsData = res.data
        dispatch(fetchPostsSucces(postsData))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailure(errorMsg))
      })
  }
}