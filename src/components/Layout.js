import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 content-area">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
