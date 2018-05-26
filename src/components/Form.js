import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.25rem 1rem;
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

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      content: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-group">
          <textarea
            onChange={this.onChange}
            className="form-control"
            style={{ width: "100%" }}
          />
          <Button type="submit">Analyze</Button>
        </div>
      </form>
    );
  }
}
