import React from "react";
import "../App.css";
import styled from "styled-components";

import Form from "./Form";

const Header = styled.div`
  width: 100%;
  font-family: "Lobster", cursive;
  color: white;
  background-color: #2ecc71;
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  height: 80px;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  padding: 1rem 1rem;
`;

const Logo = styled.div`
  font-size: 36px;
`;

const BodyTitle = styled.div`
  display: flex;
  color: #2c3e50;
  font-size: 2rem;
  font-family: "Lobster", cursive;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    color: #2c3e50;
  }
`;

const Root = styled.div`
  width: 100%;
  max-width: 1100px;
`;

class Form extends React.Component {
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
      <Root>
        <Header>
          <Logo>
            <p>captio.io</p>
          </Logo>
          <Menu>
            <MenuItem>Analyze</MenuItem>
            <MenuItem>Process</MenuItem>
            <MenuItem>Download</MenuItem>
          </Menu>
        </Header>
        <Body>
          <BodyTitle>Select Content</BodyTitle>
          <Form />
        </Body>
      </Root>
    );
  }
}

export default Form;
