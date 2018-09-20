import React from "react";

class AppLayout extends React.Component {
  render() {

    const styleNavbar = { "borderRadius": 0 }
    const titleNavbar = this.props.titleNavbar

    return (
      <div>
        <nav className="navbar navbar-inverse" style={styleNavbar}>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">{titleNavbar}</a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div >
    )
  }
}

export default AppLayout