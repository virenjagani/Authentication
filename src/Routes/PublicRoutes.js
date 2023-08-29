import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";

class PublicRoutes extends Component {
  constructor() {
    super();
    const getLocalStorage = JSON.parse(localStorage.getItem("isLogin"));
    const getLocalStorageRegister = JSON.parse(
      localStorage.getItem("isRegister")
    );
    this.state = {
      getLocalStorage: getLocalStorage,
      getLocalStorageRegister: getLocalStorageRegister,
    };
  }
  render() {
    // console.log(
    //   this.state.getLocalStorage,
    //   this.state.getLocalStorageRegister,
    //   "==="
    // );

    if (this.state.getLocalStorageRegister && this.state.getLocalStorage) {
      return <Redirect to='/' />;
    } else {
      return this.state.getLocalStorageRegister === (false || null) ? (
        <Register />
      ) : (
        <Login />
      );
    }
  }
}

export default PublicRoutes;
