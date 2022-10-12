import React from "react";
import "./task.css";

export default function Task(props) {
  const doneTask = (e) => {
    if (e.target.parentElement.firstChild.classList.contains("done")) {
      e.target.parentElement.firstChild.classList.remove("done");
    } else {
      e.target.parentElement.firstChild.classList.add("done");
    }
  };

  return (
    <div className="taskContainer">
      <p>
        {props.number}. {props.description}
      </p>
      <button onClick={doneTask}>Done</button>
      <button onClick={() => props.onDeleteCurrent(props.id)}>Delete</button>
    </div>
  );
}
