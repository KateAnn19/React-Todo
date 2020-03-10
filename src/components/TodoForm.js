import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
  };

  // class property to submit form

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          onChange={this.handleChanges}
          value={this.state.task}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
