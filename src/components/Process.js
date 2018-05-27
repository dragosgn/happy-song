import React from "react";

import api from "../api";
import test from "../test";
import processor from "../process";
import video from "../videoApi";
import Analyz from "./analyzList";

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
      </div>
    );
  }
}
