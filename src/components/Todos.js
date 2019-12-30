import React, { Component } from "react";
import TodoItems from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItems
        key={todo.id}
        todo={todo}
        markcomplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
Todos.PropTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos;
