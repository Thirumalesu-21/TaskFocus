import Taskform from "./Components/Taskform.jsx"
import TaskList from "./Components/TaskList.jsx"
import Progresstracker from "./Components/Progresstracker.jsx"
import { useEffect, useState } from "react";
export default function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return (
    <div>
      <h1>TASK FOCUS</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
          <TaskList />
          <Progresstracker />
          <button>Clear All tasks</button>
    </div>
  )
}