import React from "react";

import { compose, withStateHandlers, withHandlers } from "recompose";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  onChange = e =>
    this.setState({
      content: e.target.value
    });

  onSubmit = e => console.log(e);

  render() {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} />
          <button type="submit">Create Video</button>
        </form>
      </div>
    );
  }
}

export default Form;
