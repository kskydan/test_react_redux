import React from "react";

import PostContainer from "../containers/PostContainer";

class PostPage extends React.Component {
  render() {
    return (
      <PostContainer id={this.props.match.params.id} />
    )
  }
}

export default PostPage
