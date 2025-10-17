import Taskform from "./Components/Taskform.jsx"
import TaskList from "./Components/TaskList.jsx"
import Progresstracker from "./Components/Progresstracker.jsx"
import { useEffect, useState } from "react";
import "./style.css"
export default function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask =(updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask); 
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }
  return (
    <div>
      <h1>TASK FOCUS</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
          <TaskList tasks = {tasks} 
          updateTask = {updateTask} deleteTask = {deleteTask}/>
          
          <Progresstracker tasks ={tasks}/>
          <button>Clear All tasks</button>
    </div>
  )
}