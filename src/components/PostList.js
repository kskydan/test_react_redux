import React from "react";

class PostList extends React.Component {

  render() {

    var { posts } = this.props

    // list of posts
    const listItems = posts.map((item, idx) => {
      return <a key={idx} href={"/posts/" + item.id} className="list-group-item">{item.title}</a>
    })

    // badge with counter of posts
    const badgeHeader = posts.length ? <span className="badge">{posts.length}</span> : ""

    return (
      <div className="container-fluid">
        <p className="post__header_h3">
          <a href="#" className="btn btn-primary"><span className="glyphicon glyphicon-home"></span></a> Posts {badgeHeader}
        </p>
        <div className="list-group">
          {listItems}
        </div>
      </div>
    )
  }
}

export default PostList