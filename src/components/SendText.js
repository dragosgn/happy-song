import React from "react";
import "../App.css";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const Header = styled.div`
  width: 100%;
  font-family: "Lobster", cursive;
  color: white;
  background-color: #2ecc71;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`;

const Body = styled.div`
  padding: 0.5rem 1rem;
`;

const Logo = styled.div`
  font-size: 30px;
`;

const PageTitle = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  padding: 0.5rem;
`;

const Root = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const StyledButton = styled(Button)`
  font-family: "Lobster", cursive !important;
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
          <Logo>captio.io</Logo>
          <Menu>
            <MenuItem>Analyze</MenuItem>
            <MenuItem>Process</MenuItem>
            <MenuItem>Download</MenuItem>
          </Menu>
        </Header>
        <Body>
          <div className="row justify-content-md-center">
            <div className="col-12">
              <PageTitle>
                <h3>Structured Content</h3>
              </PageTitle>
              <form onSubmit={this.onSubmit} className="form">
                <div className="form-group">
                  <textarea
                    onChange={this.onChange}
                    className="form-control"
                    style={{ width: "100%" }}
                  />
                  <StyledButton primary type="submit">
                    Analyze
                  </StyledButton>
                </div>
              </form>
            </div>
          </div>
        </Body>
      </Root>
    );
  }
}

export default Form;
