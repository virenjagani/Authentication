import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

class PrivateRoutes extends Component {
  constructor(props) {
    // super
    super(props);
    const getLocalStorage = JSON.parse(localStorage.getItem("isLogin"));
    this.state = {
      getLocalStorage: getLocalStorage,
    };
  }
  render() {
    return this.state.getLocalStorage === (false || null) ? (
      <Redirect to="/login" />
    ) : (
      this.props.children
    );
  }
}

export default PrivateRoutes;
