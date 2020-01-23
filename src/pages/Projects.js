import React from "react";
import styled from "styled-components";
import "../styles/Projects.css";
import logo from "../assets/logo.png";
import gh from "../assets/gh.png";
import Fade from "react-reveal/Fade";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 2em;
  margin-left: 10em;
  margin-right: 10em;
  margin-bottom: -1em;
  padding-bottom: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Projects = props => (
  <GridWrapper className="gridWrap">
    <Fade left>
      <h2>Projects</h2>
    </Fade>
    <Fade left>
      <div class="projectImage">
        <div class="hovereffect">
          <a href="www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo" class="center" />
          </a>
          <div class="overlay">
            <h2>Portfolio in React</h2>
            <a
              class="info"
              href="https://www.erikmoxley.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
            <a
              class="info"
              href="https://github.com/ErikMoxley/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div class="hovereffect">
          <a href="www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={gh} alt="Logo" class="center" />
          </a>
          <div class="overlay">
            <h2>GitHub</h2>
            <a
              class="info"
              href="https://github.com/ErikMoxley"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
            <a
              class="info"
              href="https://github.com/ErikMoxley"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div class="hovereffect">
          <a href="www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={gh} alt="Logo" class="center" />
          </a>
          <div class="overlay">
            <h2>GitHub</h2>
            <a
              class="info"
              href="https://github.com/ErikMoxley"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
            <a
              class="info"
              href="https://github.com/ErikMoxley"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </Fade>
  </GridWrapper>
);
