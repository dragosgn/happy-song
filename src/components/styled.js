import React from "react";

import styled from "styled-components";

export const Button = styled.button`
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: ${props => props.theme.secondary};
  color: white;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 2px;
  font-family: "Lobster", cursive;
  :hover {
    background-color: ${props => props.theme.terciary};
  }
`;
