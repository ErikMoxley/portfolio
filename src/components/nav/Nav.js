import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../styles/Nav.css";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #add8e6;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #add8e6;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="md">
      <Navbar.Brand className="navbrand" href="/">
        E.M.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            to="/"
            exact
            className="p-2"
            activeClassName="navbar__link--active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="p-2"
            activeClassName="navbar__link--active"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="p-2"
            activeClassName="navbar__link--active"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="p-2"
            activeClassName="navbar__link--active"
          >
            Contact
          </NavLink>
        </Nav>
        <a
          href="https://erikmoxley.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          WordPress
        </a>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);