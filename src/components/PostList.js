import React from "react";

import PostFilter from "./PostFilter";

class PostList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: this.props.loading,
      filterQuery: "",
      posts: this.props.posts,
    }

  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.posts,
      loading: nextProps.loading
    })
  }

  handlerFilter(query) {
    this.setState({
      filterQuery: query ? query : ""
    })
  }

  render() {

    // apply filter to posts
    var filtered = this.state.posts
    var filterQuery = this.state.filterQuery

    if (filterQuery) {

      filtered = filtered.filter((item) => {
        let { title, body } = item
        return (title && body) ? title.indexOf(filterQuery) !== -1 || body.indexOf(filterQuery) !== -1 : false
      })

    }

    // list of posts
    const listItems = filtered.map((item, idx) => {
      return <a key={idx} href={"/posts/" + item.id} className="list-group-item">{item.title}</a>
    })

    // badge with counter of posts
    const badgeHeader = filtered.length ? <span className="badge">{filtered.length}</span> : ""

    const filter = <PostFilter handlerFilter={this.handlerFilter.bind(this)} />

    const loader = <img src={require('../images/loader.gif')} alt='' />

    const listBody = this.state.loading ? loader : listItems

    return (
      <div className="container-fluid">
        <p className="post__header_h3">
          <a href="#" className="btn btn-primary"><span className="glyphicon glyphicon-home"></span></a> Posts {badgeHeader}
        </p>
        <div className="list-group">
          {filter}
          {listBody}
        </div>
      </div>
    )
  }
}

export default PostList