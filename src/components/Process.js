import React from "react";
import styled from "styled-components";


import api from "../api";
import test from "../test";
import processor from "../process";
import video from "../videoApi";
import Analyz from "./analyzList";
import {Button} from "./styled";

const Row = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: flex-end;
`;
export default class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      text: undefined,
      entities: { entities: [] }
    };
  }

  async componentDidMount() {
    const entities = await api.analyzeEntities(test.media, "entities");
    this.setState({
      entities
    });
    const processed = processor.processEntities(entities);
    console.log(entities);
    const query = processed && processed.ORGANIZATION.map(p => p.name);
    console.log(`${query[0]} and ${query[1]}`, "query");
    const links = await video(`${query[0]}`);
    this.setState({
      links
    });
  }

  render() {
    return (
      <div>
        <div>{JSON.stringify(this.state.text)}</div>
        <Analyz entities={this.state.entities} />
        <Row>
        <Button id="download" onClick={this.props.next}>Download</Button>
      </Row>
      </div>
    );
  }
}
