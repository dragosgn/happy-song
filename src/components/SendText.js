import React from "react";
import "../App.css";

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
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" onChange={this.onChange} />
          <button type="submit">Create Video</button>
        </form>
      </div>
    );
  }
}

export default Form;
