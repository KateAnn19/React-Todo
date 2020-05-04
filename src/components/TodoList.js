// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  
  return (
    <div className="todo-list">
      {props.tasks.map(task => (
        
        <Todo
          key={task.id}
          name={task.name}
          task={task}
          id={task.id}
          toggleCompleted={props.toggleCompleted} 
          editing={props.editing}
        />
      ))}
      <button className="clear-btn" onClick={props.removeTask}>
        Clear Done 💠 
      </button>
    </div>
  );
};

export default TodoList; 
