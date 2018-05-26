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
  height: 60px;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  padding: 1rem 1rem;
`;

const Logo = styled.p`
  font-size: 40px;
`;

const BodyTitle = styled.div`
  display: flex;
  color: #2c3e50;
  font-size: 2rem;
  font-family: "Lobster", cursive;
`;

const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
`;

const MenuItem = styled.p`
  padding: 0.25rem 1rem;
  font-size: 1.5rem;
  user-select: none;
  font-family: "Lobster", cursive;
  cursor: pointer;
  color: ${props => (props.isActive ? "#2c3e50" : "white")};
  :hover {
    color: #2c3e50;
  }
`;

const Root = styled.div`
  width: 100%;
  max-width: 1100px;
`;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "analyze"
    };
  }

  onClick = e => {
    // e.preventDefault();
    this.setState({
      selectedCategory: e.target.id
    });
  };
  render() {
    return (
      <Root>
        <Header>
          <Logo>captio.io</Logo>
          <Menu>
            <MenuItem
              isActive={this.state.selectedCategory === "analyze"}
              id="analyze"
              onClick={this.onClick}
            >
              Analyze
            </MenuItem>
            <MenuItem
              onClick={this.onClick}
              isActive={this.state.selectedCategory === "process"}
              id="process"
            >
              Process
            </MenuItem>
            <MenuItem
              onClick={this.onClick}
              isActive={this.state.selectedCategory === "download"}
              id="download"
            >
              Download
            </MenuItem>
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

export default Page;
