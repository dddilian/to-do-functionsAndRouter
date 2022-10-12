import "./App.css";
import { Header, List, CreateToDo } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTaskMain = (id) => {
    setTasks(tasks.filter((taskId) => taskId !== id));
  };

  const addNewTask = (newTask) => {
    if (newTask) {
      tasks.push(newTask);
      setTasks(tasks);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateToDo onCreateToDo={addNewTask} />} />
          <Route
            path="/to-do-list"
            element={<List tasks={tasks} onDeleteTask={handleDeleteTaskMain} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
