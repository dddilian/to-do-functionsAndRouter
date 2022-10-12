import React from "react";
import { useState } from "react";

function CreateToDo(props) {
  const [newTask, setNewTask] = useState("");

  const handleTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const wrapperFunc = () => {
    props.onCreateToDo(newTask);
    setNewTask("");
  };

  return (
    <div id="inputContainer">
      <label className="inputChild" htmlFor="inputEl">
        Add task:
      </label>

      <input
        className="inputChild"
        id="inputEl"
        type="text"
        placeholder="Write new task here"
        value={newTask}
        onInput={handleTaskInput}
      />

      <button onClick={wrapperFunc}>Add task</button>
    </div>
  );
}

export default CreateToDo;
