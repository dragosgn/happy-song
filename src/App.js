import React, { Component } from "react";
import SendText from "./components/SendText";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <SendText />
      </Container>
    );
  }
}

export default App;
