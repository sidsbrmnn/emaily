import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, auth }) => {
  return (
    <>
      {auth ? <Header user={auth} /> : null}

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
