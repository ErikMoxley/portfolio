import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../styles/Nav.css";
import { Nav, Navbar } from "react-bootstrap";
import { Collapse, NavbarToggler } from "reactstrap";
import OutsideClickHandler from "react-outside-click-handler";
import logobrand from "../../assets/logobrand.png";

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

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
  }

  render() {
    return (
      <Styles>
        <OutsideClickHandler
          onOutsideClick={() => {
            this.closeNavbar();
          }}
        >
          <header>
            <Navbar variant="dark" className="navigation__navbar" expand="md">
              <Navbar.Brand className="navBrand" href="/">
                <img
                  className="logobrand"
                  src={logobrand}
                  alt=""
                  align="middle"
                  width="40px"
                  height="40px"
                />
              </Navbar.Brand>

              <NavbarToggler
                class="navbar navbar-dark bg-dark"
                onClick={this.toggleNavbar}
              />

              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="ml-auto">
                  <NavLink
                    onClick={this.closeNavbar}
                    to="/"
                    exact
                    className="p-2"
                    activeClassName="navbar__link--active"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    onClick={this.closeNavbar}
                    to="/about"
                    className="p-2"
                    activeClassName="navbar__link--active"
                  >
                    About
                  </NavLink>
                  <NavLink
                    onClick={this.closeNavbar}
                    to="/projects"
                    className="p-2"
                    activeClassName="navbar__link--active"
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    onClick={this.closeNavbar}
                    to="/contact"
                    className="p-2"
                    activeClassName="navbar__link--active"
                  >
                    Contact
                  </NavLink>
                </Nav>
                <a
                  onClick={this.closeNavbar}
                  href="https://erikmoxley.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  WordPress
                </a>
              </Collapse>
            </Navbar>
          </header>
        </OutsideClickHandler>
      </Styles>
    );
  }
}

// onClick={this.closeNavbar}
// Navbar variant="dark" or "light" to change icon shading.
