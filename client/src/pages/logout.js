import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

const LogoutPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.logout();
    }, 1500);
  });

  return (
    <section className="px-6 py-16">
      <h2>You're now being logged out.</h2>
    </section>
  );
};

export default connect(null, actions)(LogoutPage);
