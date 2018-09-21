import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// reducers
import PostsReducer from "./PostsReducer";
import UsersReducer from "./UsersReducer";
import CommentssReducer from "./CommentsReducer";

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  comments: CommentssReducer,
  form: formReducer
})

export default rootReducer
