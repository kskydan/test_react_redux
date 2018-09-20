import React from "react";

import Post from "../components/Post";

class PostPage extends React.Component {
  render() {

    // fake post data
    var fakePosts = require("../fakedata/fakePosts.json");
    var fakePost = fakePosts[0]
    console.log('fake post', fakePost);

    // fake user data
    var fakeUsers = require("../fakedata/fakeUsers.json");
    var fakeUser = fakeUsers[0]
    console.log('fake user', fakeUser);

    // fake comments data
    var fakeComments = require("../fakedata/fakeComments.json");
    console.log('fake comments', fakeComments);

    return (
      <Post post={fakePost} user={fakeUser} comments={fakeComments} />
    )
  }
}

export default PostPage
