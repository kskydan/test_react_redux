import React from "react";

import PostFilter from "./PostFilter";

class PostList extends React.Component {

  handlerFilter(query) {
    console.log(query)
  }

  render() {

    var { posts } = this.props

    // list of posts
    const listItems = posts.map((item, idx) => {
      return <a key={idx} href={"/posts/" + item.id} className="list-group-item">{item.title}</a>
    })

    // badge with counter of posts
    const badgeHeader = posts.length ? <span className="badge">{posts.length}</span> : ""

    const filter = <PostFilter handlerFilter={this.handlerFilter.bind(this)} />

    return (
      <div className="container-fluid">
        <p className="post__header_h3">
          <a href="#" className="btn btn-primary"><span className="glyphicon glyphicon-home"></span></a> Posts {badgeHeader}
        </p>
        <div className="list-group">
          {filter}
          {listItems}
        </div>
      </div>
    )
  }
}

export default PostList