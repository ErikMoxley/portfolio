import React from "react";
import styled from "styled-components";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 2em;
  margin-left: 10em;
  margin-right: 10em;
  margin-bottom: -1em;
  padding-bottom: 2em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Contact = props => (
  <GridWrapper>
    <h2>Contact</h2>
    <p>
      <ul>Test</ul>
      <ul>Test</ul>
      <ul>Test</ul>
    </p>
    <p>
      <ul>Test</ul>
      <ul>Test</ul>
      <ul>Test</ul>
    </p>
  </GridWrapper>
);
