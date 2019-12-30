import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            value={this.state.value}
            placeholder="Add Todo..."
            onChange={this.onChange}
            style={{ flex: "10", padding: "5px" }}
          />
          <input
            type="submit"
            value="+ Add"
            className="btn"
            style={{ flex: "1", padding: "5px" }}
          />
        </form>
      </div>
    );
  }
}

// PropTypes
AddTodo.PropTypes = {
  AddTodo: PropTypes.func.isRequired
};

export default AddTodo;
