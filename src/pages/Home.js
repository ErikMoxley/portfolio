import React from "react";
import styled from "styled-components";
import { Jumbotron, Container, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import Typist from "react-typist";
import "../styles/Home.css";

const GridWrapper = styled.div``;
export const Home = props => (
  <GridWrapper>
    <div id="top">
      <Jumbotron className="jumbotron" fluid>
        <Container className="container" fluid>
          <Fade left>
            <div className="Typist">
              <Typist className="hero" cursor={{ hideWhenDone: true }}>
                Hello, I'm
                <Typist.Delay ms={100} />
                <span className="eMox">
                  Eric K.
                  <Typist.Backspace count={4} delay={1000} />
                  <Typist.Delay ms={750} />k Moxley.
                  <Typist.Delay ms={6590} />
                </span>
              </Typist>
            </div>
          </Fade>
          <Fade right>
            <div className="Typist">
              <Typist className="hero" cursor={{ hideWhenDone: true }}>
                Former Store Manager.
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={21} delay={500} />
                Aspiring Software Engineer.
                <Typist.Delay ms={500} />
                <Typist.Backspace count={18} delay={500} />
                <Typist.Delay ms={1000} />
                Web Developer.
              </Typist>
            </div>
          </Fade>
          <p className="lead">
            <Fade bottom big>
              <NavLink
                activeClass="active"
                to="/about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                <Button color="secondary" size="md">
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
