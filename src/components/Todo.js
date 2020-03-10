import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.task.id)}
      //togglePurchased is passed down as a prop
      className={`task ${props.task.completed ? ' completed' : ''}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;