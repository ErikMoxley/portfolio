import React from "react";
import styled from "styled-components";
import { Jumbotron, Container, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import Typist from "react-typist";
import "../styles/Home.css";

const GridWrapper = styled.div`
  margin-top: 2em;
  margin-left: 10em;
  margin-right: 0em;
  margin-bottom: -1em;
`;
export const Home = props => (
  <GridWrapper className="gridWrap-Home">
    <div id="top">
      <Jumbotron className="jumbotron" fluid>
        <Container className="container" fluid>
          <Fade top big>
            <div className="Typist">
              <Typist className="hero" cursor={{ hideWhenDone: true }}>
                HELLO, I'm
                <Typist.Delay ms={100} />
                <span className="eMox">
                  Eric K.
                  <Typist.Backspace count={4} delay={1000} />
                  <Typist.Delay ms={750} />k Moxley.
                  <Typist.Delay ms={9900} />
                </span>
              </Typist>
            </div>
          </Fade>
          <Fade left big>
            <div className="Typist">
              <Typist className="hero" cursor={{ hideWhenDone: true }}>
                Former Store Manager.
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={21} delay={500} />
                Aspiring Web Developer.
                <Typist.Delay ms={500} />
                <Typist.Backspace count={14} delay={500} />
                <Typist.Delay ms={1000} />
                Software Developer.
                <Typist.Delay ms={500} />
                <Typist.Backspace count={10} delay={500} />
                <Typist.Delay ms={1000} />
                Engineer.
              </Typist>
            </div>
          </Fade>
          <p className="lead">
            <Fade bottom>
              <NavLink
                activeClass="active"
                to="/about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                <Button className="findOutButton" color="secondary" size="md">
                  Find Out More
                </Button>
              </NavLink>
            </Fade>
          </p>
        </Container>
      </Jumbotron>
    </div>
  </GridWrapper>
);
