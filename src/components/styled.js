import React from "react";

import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: ${props =>
    props.color ? props.color : props.theme.secondary};
  color: white;
  border: 1px solid
    ${props => (props.color ? props.color : props.theme.secondary)};
  border-radius: 2px;
  font-family: "Lobster", cursive;
  :hover {
    background-color: ${props =>
      props.secondaryColor ? props.secondaryColor : props.theme.terciary};
  }
`;

export const buttonCss = css`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: ${props =>
    props.color ? props.color : props.theme.secondary};
  color: white;
  border: 1px solid
    ${props => (props.color ? props.color : props.theme.secondary)};
  border-radius: 2px;
  font-family: "Lobster", cursive;
  :hover {
    background-color: ${props =>
      props.secondaryColor ? props.secondaryColor : props.theme.terciary};
  }
`;
