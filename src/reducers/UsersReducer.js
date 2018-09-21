import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR
} from "../actions/usersActions";

const INITIAL_STATE = {
  users: [],
  user: null,
  loading: false,
  error: null
}

export default function (state = INITIAL_STATE, action) {

  var updated = Object.assign({}, state)

  switch (action.type) {
    case USER_REQUEST:  // start user loading
      updated['user'] = null
      updated['loading'] = true
      return updated

    case USER_SUCCESS:  // success loading
      updated['user'] = action.payload
      updated['loading'] = false
      return updated

    case USER_ERROR:  // error loading
      updated['user'] = null
      updated['loading'] = false
      updated['error'] = action.payload
      return updated

    default:
      return state;
  }
}
