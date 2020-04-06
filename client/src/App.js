import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";

import * as actions from "./actions";
import IndexPage from "./pages/index";
import SurveysPage from "./pages/surveys";

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
          <Route path="/surveys" exact component={SurveysPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect(null, actions)(App);
