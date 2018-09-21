import { connect } from 'react-redux';

import PostList from "../components/PostList";
import { fetchPosts } from '../actions/postsActions';

const mapStateToProps = (state) => {

  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      fetchPosts()(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
