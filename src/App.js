import React, { Component } from "react";
import SendText from "./components/SendText";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const theme = {
  primary: "#2ecc71",
  secondary: "#007bff",
  terciary: "#0062cc"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <SendText />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
