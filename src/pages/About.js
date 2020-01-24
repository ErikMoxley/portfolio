import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import er from "../assets/er.jpg";
import resume from "../assets/Resume2020.pdf";
import "../styles/About.css";

const GridWrapper = styled.div`
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
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
        near the capes. My hobbies and passions include technology, gaming,
        fantasy sports, dining out, watching movies in theaters and helping
        people. My blogs will focus on these topics and will be located through
        WordPress.
      </p>
      <p className="aboutMe">
        I want to thank you for joining me as I learn and work towards becoming
        a developer in the near future and hopefully an engineer later on. My
        resume is filled with years of management and leadership experience in a
        Pharmacy and Retail setting. Current languages, tools and technologies I
        use are HTML5, CSS3, Sass, Javascript, Bootstrap, GatsbyJS, ReactJS,
        Git, GitHub, WordPress.com, Command Line/Powershell with some exposure
        to Jquery, NodeJS, MongoDB, some backend development. I currently deploy
        my web projects with gh-pages and/or Netlify. My next steps are to
        explore uses of different API's and become well rounded in full-stack
        development in the near future.
      </p>
    </Fade>
    <Fade bottom>
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
        <NavLink
          activeClass="active"
          to="/projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          <Button className="findOutButton" color="secondary" size="md">
            Portfolio
          </Button>
        </NavLink>
      </NavLink>
    </Fade>
  </GridWrapper>
);
