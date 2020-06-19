import React, { Component } from "react";
import { addTodo } from "../actions/todoAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./createTodo.scss";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: ""
    };
  }
  onChangeTodotext = e => {
    let text = e.target.value;
    this.setState({
      todotext: text
    });
  };
  render() {
    return (
      <div className="header">
        <input
          className="createTodo"
          type="text"
          value={this.state.todotext}
          onChange={this.onChangeTodotext}
          placeholder="add todo here"
        />
        <button
          className="btnCancel"
          type="button"
          onClick={() => this.setState({ todotext: "" })}
        >
          Cancel
        </button>
        <button
          className="btnAdd"
          type="button"
          onClick={() => {
            this.props.addTodo(this.state.todotext);
            this.setState({ todotext: "" });
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

const mapDistachProps = dispatch => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch)
  };
};

export default connect(
  null,
  mapDistachProps
)(CreateTodo);
