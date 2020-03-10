// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
          //togglePurchased is passed down from App.js as a prop
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;
