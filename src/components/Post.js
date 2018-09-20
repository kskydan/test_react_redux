import React from "react";

import Comment from "./Comment";
import UserInfo from "./UserInfo";

class Post extends React.Component {
  render() {

    console.log(this.props)

    var { post, user, comments } = this.props

    // list of comments
    const commentsItems = comments.map((item, idx) => {
      return <Comment key={idx} comment={item} />
    })

    // badge with counter of comments
    const badgeHeader = comments.length ? <span className="badge">{comments.length}</span> : ""

    const userInfo = <UserInfo user={user} />

    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-8 col-lg-9">
            <p className="post__header_h3"><a href="/" className="btn btn-primary"><span className="glyphicon glyphicon-chevron-left"></span></a> {post.title}</p>
            <div className="panel panel-default">
              <div className="panel-body">{post.body}</div>
            </div>
            <h4>Comments {badgeHeader}</h4>
            {commentsItems}
          </div>

          <div className="col-md-4 col-lg-3">{userInfo}</div>

        </div>

      </div>
    )
  }
}

export default Post