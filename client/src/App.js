import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/index";
import Layout from "./components/Layout";

class App extends Component {
  state = {};

  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={IndexPage} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
