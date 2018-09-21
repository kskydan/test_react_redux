import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR
} from "../actions/commentsActions";

const INITIAL_STATE = {
  comments: [],
  loading: false,
  error: null
}

export default function (state = INITIAL_STATE, action) {

  var updated = Object.assign({}, state)

  switch (action.type) {
    case COMMENTS_REQUEST:  // start comments loading
      updated['comments'] = []
      updated['loading'] = true
      return updated

    case COMMENTS_SUCCESS:  // success loading
      updated['comments'] = action.payload
      updated['loading'] = false
      return updated

    case COMMENTS_ERROR:  // error loading
      updated['comments'] = []
      updated['loading'] = false
      updated['error'] = action.payload
      return updated

    default:
      return state;
  }
}
