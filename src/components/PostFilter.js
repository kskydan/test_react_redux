import React from "react";

class PostFilter extends React.Component {

  handlerOnKeyUp(event) {
    this.props.handlerFilter(event.target.value)
  }

  render() {

    var styleInput = { "marginBottom": 3 }

    return (
      <div className="input-group" style={styleInput}>
        <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
        <input id="myInput" type="text" className="form-control" onKeyUp={this.handlerOnKeyUp.bind(this)} placeholder="Search by title and body..." data-original-title="" title="" />
      </div>
    )
  }
}

export default PostFilter