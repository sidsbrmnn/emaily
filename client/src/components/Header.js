import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};

  renderNav() {
    switch (this.props.auth) {
      case null || undefined:
        return;
      case false:
        return <a href="/auth/google">Login with Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <header>
        <Link to="/">Emaily</Link>
        <nav>{this.renderNav()}</nav>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
