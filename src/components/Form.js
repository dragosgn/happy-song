import React from "react";
import styled from "styled-components";

import initialContext from "../test";

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

const StyledForm = styled.form`
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: #ecf0f1;
  font-family: "Tajawal", sans-serif;
`;

const Row = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: initialContext.real
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
      <StyledForm onSubmit={this.onSubmit}>
        <Textarea
          onChange={this.onChange}
          className="form-control"
          value={this.state.content}
        />
        <Row>
          <Button type="submit">Analyze</Button>
        </Row>
      </StyledForm>
    );
  }
}
