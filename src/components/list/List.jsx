import React from "react";

import "./list.css";
import Task from "../task/Task";

export default function List(props) {
  const handleDeleteTask = (id) => {
    props.onDeleteTask(id);
  };

  return (
    <div id="listContainer">
      <div id="tasksList">
        {props.tasks.length > 0 ? (
          props.tasks.map((task, i) => (
            <Task
              number={i + 1}
              description={task}
              key={i}
              id={task}
              onDeleteCurrent={handleDeleteTask}
            />
          ))
        ) : (
          <div>No tasks</div>
        )}
      </div>
    </div>
  );
}
