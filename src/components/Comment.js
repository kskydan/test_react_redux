import React from "react";

class Comment extends React.Component {
  render() {

    var { idx, name, body, email } = this.props.comment

    return (
      <div key={idx} className="panel panel-success">
        <div className="panel-heading">
          <span className="glyphicon glyphicon-user"></span> {name} ({email})</div>
        <div className="panel-body">{body}</div>
      </div>
    )
  }
}

export default Comment