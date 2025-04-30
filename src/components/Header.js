import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Navbar className="custom-bg" variant="dark">
    <Navbar.Brand className="ms-3">React Redux App</Navbar.Brand>
  </Navbar>
);

export default Header;
