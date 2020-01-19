import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faFontAwesome,
  faReact,
  faInstagram,
  faTwitch,
  faGithub,
  faLinkedin,
  faDiscord,
  faFacebook,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <MDBFooter color="black" className="footer-bot pt-4 mt-4">
      <MDBContainer fluid className="footer-container text-center text-md-left">
        <MDBRow>
          <MDBCol className="footer-quote" md="3">
            <h5 className="footer-brand" md="3">
              Erik Moxley
            </h5>
            <p>
              "In the expression of grief lies recovery from grief itself." -
              Christopher Priest
            </p>
          </MDBCol>
          <MDBCol className="footer-content1" md="3">
            <h5 className="title">Content</h5>
            <ul>
              <ul>
                <NavLink
                  className="text-home"
                  activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Home
                </NavLink>
              </ul>
              <ul>
                <NavLink
                  className="text-about"
                  activeClass="active"
                  to="/about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  About
                </NavLink>
              </ul>
              <ul>
                <NavLink
                  className="text-projects"
                  activeClass="active"
                  to="/projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Projects
                </NavLink>
              </ul>
              <ul>
                <NavLink
                  className="text-projects"
                  activeClass="active"
                  to="/contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Contact
                </NavLink>
              </ul>
            </ul>
          </MDBCol>
          <MDBCol className="footer-social" md="3">
            <h5 className="title">Social</h5>
            <ul>
              <li className="list-unstyled">
                <a
                  href="https://github.com/erikmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                  Github
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.linkedin.com/in/erikmoxley/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linked
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://erikmoxley.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWordpress} size="1x" />
                  ordPress
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://discordapp.com/invite/58SevRg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                  <FontAwesomeIcon icon={faDiscord} size="1x" />
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className="footer-social" md="3">
            <h5 className="title">Follow</h5>
            <ul>
              <li className="list-unstyled">
                <a
                  href="https://www.facebook.com/vincenterikmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                  acebook
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.instagram.com/erik.moxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.twitch.tv/erikmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitch} size="1x" />
                  Twitch.tv
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-content text-center py-3">
        <MDBContainer className="made-with" fluid>
          Content made possible with:<br></br>
          <FontAwesomeIcon icon={faHtml5} size="3x" />
          <FontAwesomeIcon icon={faCss3} size="3x" />
          <FontAwesomeIcon icon={faJs} size="3x" />
          <FontAwesomeIcon icon={faBootstrap} size="3x" />
          <FontAwesomeIcon icon={faFontAwesome} size="3x" />
          <FontAwesomeIcon icon={faReact} size="3x" />
        </MDBContainer>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: {"Erik Moxley"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
