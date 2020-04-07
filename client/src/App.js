import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import * as actions from "./actions";

import Layout from "./components/Layout";

import IndexPage from "./pages/index";
import LogoutPage from "./pages/logout";
import SurveysPage from "./pages/surveys";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { auth } = this.props;

    return (
      <HashRouter>
        <Layout auth={auth}>
          <Switch>
            {auth ? (
              <>
                <Redirect from="/" exact to="/surveys" />
                <Route path="/surveys" exact component={SurveysPage} />
                <Route path="/logout" exact component={LogoutPage} />
              </>
            ) : (
              <>
                <Route path="/" exact component={IndexPage} />
                <Redirect to="/" />
              </>
            )}
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
