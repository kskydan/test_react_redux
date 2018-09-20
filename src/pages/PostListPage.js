import React from "react";

import PostList from "../components/PostList";

class PostListPage extends React.Component {


  render() {

    // fake pasts data
    var fakePosts = require("../fakedata/fakePosts.json");
    console.log(fakePosts);

    return (
      <PostList posts={fakePosts} />
    )
  }
}

export default PostListPage
