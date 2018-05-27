import React from "react";
import styled from "styled-components";

import myVideo from "../movie.mp4";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding-top: 4rem;
`;

const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default () => (
  <Root>
    <video width="900" controls>
      <source src={myVideo} type="video/mp4" />
    </video>
  </Root>
);
