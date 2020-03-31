import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ home, children }) => {
  return (
    <>
      <Header home={home} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
