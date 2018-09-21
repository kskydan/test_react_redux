// user actions
export const USER_REQUEST = "USER_REQUEST"
export const USER_SUCCESS = "USER_SUCCESS"
export const USER_ERROR = "USER_ERROR"

function fetchUserRequest() {
  return {
    type: USER_REQUEST
  }
}

function fetchUserSuccess(user) {
  return {
    type: USER_SUCCESS,
    payload: user
  }
}

function fetchUserError(error) {
  return {
    type: USER_ERROR,
    payload: error
  }
}

export const fetchUser = (userId) => {
  return (dispatch) => {

    dispatch(fetchUserRequest())

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        if (res.status === 200) {
          return res;
        }
        else {
          throw new Error('User NOT fetched!');
        }
      })
      .then(res => res.json())
      .then(data => dispatch(fetchUserSuccess(data)))
      .catch(err => dispatch(fetchUserError(err.message)))
  }
}
