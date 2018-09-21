import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR
} from "../actions/postsActions";

const INITIAL_STATE = {
  posts: [],
  post: null,
  loading: false,
  error: null
}

export default function (state = INITIAL_STATE, action) {

  var updated = Object.assign({}, state)

  switch (action.type) {
    case POST_REQUEST:  // start loading of post
      updated['post'] = null
      updated['loading'] = true
      return updated

    case POST_SUCCESS:  // success loading
      updated['post'] = action.payload
      updated['loading'] = false
      return updated

    case POST_ERROR:  // error loading
      updated['post'] = null
      updated['loading'] = false
      updated['error'] = action.payload
      return updated

    case POSTS_REQUEST:  // start loading of posts list
      updated['posts'] = []
      updated['loading'] = true
      return updated

    case POSTS_SUCCESS:  // success loading
      updated['posts'] = action.payload
      updated['loading'] = false
      return updated

    case POSTS_ERROR:  // error loading
      updated['posts'] = []
      updated['loading'] = false
      updated['error'] = action.payload
      return updated

    default:
      return state;
  }
}
