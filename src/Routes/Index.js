import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Dashboard from "../Pages/Dashboard";
import PublicRoutes from "./PublicRoutes";
import ProductModel from "../Pages/Products/ProductModel";

class Index extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login">
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          </Route>
          <Route exact path="/register">
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          </Route>
          <Route exact path="/">
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          </Route>
          <Route exact path="/product">
            <PrivateRoutes>
              <ProductModel />
            </PrivateRoutes>
          </Route>
        </Switch>
      </>
    );
  }
}

export default Index;
