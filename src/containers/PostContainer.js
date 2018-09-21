import { connect } from 'react-redux';
import Post from "../components/Post";
import { fetchPost } from '../actions/postsActions';

const mapStateToProps = (state, ownProps) => {
  console.log('PostContainer.mapStateToProps state', state)
  return {
    id: ownProps.id,
    post: state.posts.post,
    user: state.users.user,
    comments: state.comments.comments,
    loading: state.posts.loading,
    error: state.posts.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      fetchPost(id)(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
