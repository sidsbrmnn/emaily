import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";

import * as actions from "./actions";
import IndexPage from "./pages/index";
import Layout from "./components/Layout";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/" exact component={IndexPage} />
          </Switch>
      </HashRouter>
    );
  }
}

export default connect(null, actions)(App);
