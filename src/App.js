import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from "./api"
import test from "./test"
import processor from "./process"
import video from './videoApi'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      links: [],
      text: ''
    }
  }

  async componentDidMount(){
    const entities = await api.analyzeEntities(test.real, 'entities')
    const processed = processor.processEntities(entities)

    const query = processed && processed.ORGANIZATION.map(p => p.name)
    console.log(`${query[0]} and ${query[1]}`, "query")
    const links = await video(`${query[0]}`)
    this.setState({
      links
    })
  }
  
  render () {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div dangerouslySetInnerHTML={this.state.links[0]} style={{height: "400px"}}>
        </div>
        <div>{JSON.stringify(this.state.text)}</div>
        
      </div>
    );
  }
}

export default App;
