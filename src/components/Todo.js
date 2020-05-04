import React, { useState } from "react";

const Todo = (props) => {
  const [editing, isEditing] = useState(false);
  const [update, isUpdating] = useState(props.task.name);

  function toggleUpdateForm() {
    isEditing(true);
  }

  function handleUpdate(e) {
    e.preventDefault();
    props.editing(props.id, update);
    isEditing(false);
    //for some reason calling toggleUpdateForm with false passed in doesn't work
  }

  function handleChange(e) {
    isUpdating(e.target.value);
  }

  let result;
  if (editing) {
    result = (
      <div>
        <form>
          <input
            type="text"
            onChange={handleChange}
            value={update}
            name={update}
          />
        </form>
        <button onClick={handleUpdate}>Done Editing</button>
      </div>
    );
  } else {
    result = (
      <div
        onClick={() => props.toggleCompleted(props.task.id)}
        className={`task ${props.task.completed ? " completed" : ""}`}
      >
        <p>{props.task.name}</p>
        <button onClick={toggleUpdateForm}>Edit</button>
      </div>
    );
  }
  return (
    <div>
      <div>{result}</div>
    </div>
  );
};

export default Todo;
