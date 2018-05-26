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
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12">
            <h2>News Content</h2>

            <form onSubmit={this.onSubmit} className="form">
              <div className="form-group">
                <textarea onChange={this.onChange} className="form-control" />
                <button type="submit" className="btn btn-primary">
                  Create Video
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
