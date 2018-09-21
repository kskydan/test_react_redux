// comments actions
export const COMMENTS_REQUEST = "COMMENTS_REQUEST"
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS"
export const COMMENTS_ERROR = "COMMENTS_ERROR"

function fetchCommentsRequest() {
  return {
    type: COMMENTS_REQUEST
  }
}

function fetchCommentsSuccess(comments) {
  return {
    type: COMMENTS_SUCCESS,
    payload: comments
  }
}

function fetchCommentsError(error) {
  return {
    type: COMMENTS_ERROR,
    payload: error
  }
}

export const fetchComments = (postId) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest())

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => {
        if (res.status === 200) {
          return res;
        }
        else {
          throw new Error('Comments NOT fetched!');
        }
      })
      .then(res => res.json())
      .then(data => dispatch(fetchCommentsSuccess(data)))
      .catch(err => dispatch(fetchCommentsError(err.message)))
  }
}
