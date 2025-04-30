import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaWpforms, FaTable } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const location = useLocation();

  return (
    <>
      {/* Offcanvas Sidebar for mobile */}
      <div
        className={`offcanvas offcanvas-start ${collapsed ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasSidebar"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleSidebar}
          ></button>
        </div>
        <div className="offcanvas-body">
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/"
              className={`sidebar-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <FaWpforms className="me-2" />
              {!collapsed && "Form"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/records"
              className={`sidebar-link ${
                location.pathname === "/records" ? "active" : ""
              }`}
            >
              <FaTable className="me-2" />
              {!collapsed && "Records"}
            </Nav.Link>
          </Nav>
        </div>
      </div>

      {/* Sidebar for large screens */}
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <Nav className="flex-column p-3">
          <Nav.Link
            as={Link}
            to="/"
            className={`sidebar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <FaWpforms className="me-2" />
            {!collapsed && "Form"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/records"
            className={`sidebar-link ${
              location.pathname === "/records" ? "active" : ""
            }`}
          >
            <FaTable className="me-2" />
            {!collapsed && "Records"}
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
