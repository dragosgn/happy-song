import React from "react";
import { Button } from "semantic-ui-react";

const StyledButton = styled(Button)`
  font-family: "Lobster", cursive !important;
`;

export default () => (
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
);
