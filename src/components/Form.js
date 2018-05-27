import React from "react";
import styled from "styled-components";

import initialContext from "../test";

import { Button } from "./styled";

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
      content: initialContext.media
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
          <Button id="process" type="submit" onClick={this.props.next}>
            Analyze
          </Button>
        </Row>
      </StyledForm>
    );
  }
}
