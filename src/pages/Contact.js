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

    <div>
      <ul>
        &nbsp;&nbsp;
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="contact-icons"
          color="black"
          size="2x"
        />
        &nbsp; Currently residing in Lowell, MA.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Located ~35-40 mins from Boston, MA.)
      </ul>
      <ul>
        &nbsp;&nbsp;
        <FontAwesomeIcon
          icon={faMobileAlt}
          className="contact-icons"
          color="black"
          size="2x"
        />
        &nbsp; 1 (978) 935-8860
      </ul>
      <ul>
        <FontAwesomeIcon
          icon={faInbox}
          className="contact-icons"
          color="black"
          size="2x"
        />
        &nbsp; VincentErikMoxley@gmail.com
      </ul>

      <hr className="contact-hr" />
    </div>

    <p class="contact-message">
      Feel free to contact me via information or social media in footer as the
      functions in the forms are still under construction. Sorry for the
      inconvenience.
    </p>
  </GridWrapper>
);
