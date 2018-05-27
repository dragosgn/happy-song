import logo from "./logo.svg";
import "./App.css";
import api from "./api";
import test from "./test";
import processor from "./process";
import video from "./videoApi";
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
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      text: undefined
    };
  }

  async componentDidMount() {
    const entities = await api.analyzeEntities(test.real, "entities");
    const processed = processor.processEntities(entities);

    const query = processed && processed.ORGANIZATION.map(p => p.name);
    console.log(`${query[0]} and ${query[1]}`, "query");
    const links = await video(`${query[0]}`);
    this.setState({
      links
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <SendText />
          <div
            dangerouslySetInnerHTML={this.state.links[0]}
            style={{ height: "400px" }}
          />
          <div>{JSON.stringify(this.state.text)}</div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
