import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faInbox
} from "@fortawesome/free-solid-svg-icons";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 2em;
  margin-left: 10em;
  margin-right: 2em;
  margin-bottom: -1em;
  padding-bottom: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Contact = props => (
  <GridWrapper className="gridWrap">
    <Fade left big>
      <h2 class="contact-title">Contact</h2>
    </Fade>
    <Fade top>
      <div>
        <ul>
          <div class="p-1">
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="contact-icons"
              color="black"
              size="2x"
            />
            Currently residing in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Lowell,_Massachusetts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lowell, MA.
            </a>
            <br />
            <span class="pl-4"></span>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Lowell+MA&destination=Boston+MA&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
            >
              (~35-40 mins from Boston, MA.)
            </a>
          </div>
        </ul>
        <ul>
          <div class="p-1">
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="contact-icons"
              color="black"
              size="2x"
            />
            <a href="tel:+19789358860">1 (978) 935-8860</a>
          </div>
        </ul>
        <ul>
          <div class="p-1">
            <FontAwesomeIcon
              icon={faInbox}
              className="contact-icons"
              color="black"
              size="2x"
            />
            &nbsp;
            <a
              href="mailto:VincentErikMoxley@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              VincentErikMoxley@gmail.com
            </a>
          </div>
        </ul>

        <hr className="contact-hr" />
      </div>

      <p class="contact-message">
        Feel free to contact me via information or social media in footer as
        I've not yet implemented nodemailer just yet. Sorry for the
        inconvenience.
      </p>
    </Fade>
  </GridWrapper>
);
