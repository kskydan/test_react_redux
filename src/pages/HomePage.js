import React from "react";
import { Redirect } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <Redirect to="/posts" />
    )
  }
}

export default HomePage
