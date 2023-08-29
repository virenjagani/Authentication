import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    localStorage.setItem("isRegister", JSON.stringify(true));
    this.state = {};
  }
  render() {
    return <>register</>;
  }
}

export default Register;
