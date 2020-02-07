import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import er from "../assets/er.jpg";
import resume from "../assets/Resume2020.pdf";
import "../styles/About.css";
import WorkModal from "../components/Modal.js";

const GridWrapper = styled.div`
  margin-top: 2em;
  margin-left: 10em;
  margin-right: 10em;
  margin-bottom: -1em;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(25px, auto);
  padding-bottom: 2em;
`;
export const About = () => (
  <GridWrapper className="gridWrap">
    <Fade left>
      <h2>About</h2>
    </Fade>
    <Fade top>
      <p className="aboutMe">
        <img className="er" src={er} alt="" align="middle" />
        Hello, my name is Erik and I wish to make positive impacts in people's
        lives. I currently live in Lowell, Massachusetts. Born in Gloucester, MA
        near the capes, some of my hobbies and passions include technology,
        building and fixing PCs, gaming, fantasy sports, dining out, and
        watching movies in theaters.
      </p>
      <p className="aboutMe">
        I have a strong sense of curiosity of how things work, a drive to
        succeed at whatever is placed in front of me and a work ethic that
        compliments all of the above. Computers have always been a passion of
        mine and in software development, I truely believe can be the gateway
        towards expressing my passions and creativity. My back has always been
        against the wall my entire life, and the desire to problem solve, help
        people and show everyone that caring is my greatest strength will be all
        of the motivation I'll have along the way.
      </p>
      <p className="aboutMe">
        My resume is filled with years of management and leadership experience
        in a Pharmacy and Retail setting. Current languages, tools and
        technologies I use are HTML5, CSS3, Sass, Javascript, Bootstrap,
        GatsbyJS, ReactJS, Git, GitHub, WordPress.com, Command Line/Powershell
        with some exposure to Jquery, NodeJS, MongoDB, some backend development.
        I currently deploy my web projects with gh-pages and/or Netlify. My next
        steps are to explore uses of different API's and become well rounded in
        full-stack development in the near future.
      </p>
    </Fade>
    <div className="rowC">
      <Fade bottom>
        <NavLink
          activeClass="active"
          to="/projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          <Button className="portButton" color="secondary" size="md">
            Portfolio
          </Button>
        </NavLink>
        <NavLink
          activeClass="active"
          to={resume}
          target="_blank"
          rel="noopener noreferrer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          <Button className="resumeButton" color="secondary" size="md">
            Resume
          </Button>
        </NavLink>
        <WorkModal />
      </Fade>
    </div>
  </GridWrapper>
);
