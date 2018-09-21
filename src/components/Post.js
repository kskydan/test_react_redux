import React from "react";

// requested components
import Comment from "./Comment";
import UserInfo from "./UserInfo";

class Post extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      post: this.props.post,
      user: this.props.user,
      comments: this.props.comments,
    }

  }

  componentDidMount() {
    this.props.fetchPost(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      post: nextProps.post,
      user: nextProps.user,
      comments: nextProps.comments,
      loading: nextProps.loading
    })
  }

  render() {

    var { post, user, comments, loading } = this.state

    // list of comments
    const commentsItems = comments.map((item, idx) => {
      return <Comment key={idx} comment={item} />
    })

    // badge with counter of comments
    const badgeHeader = comments.length ? <span className="badge">{comments.length}</span> : ""

    const userInfo = !loading && user ? <UserInfo user={user} /> : ""

    const postTitle = !loading && post ? post.title : <img src={require('../images/loader.gif')} alt='' />

    const postBody = !loading && post ? post.body : ""

    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-8 col-lg-9">
            <p className="post__header_h3"><a href="/" className="btn btn-primary"><span className="glyphicon glyphicon-chevron-left"></span></a> {postTitle}</p>
            <div className="panel panel-default">
              <div className="panel-body">{postBody}</div>
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