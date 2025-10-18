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
  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div className = "App">
      <h1 className="title">TASK FOCUS</h1>
      <p className="tagline">Our Friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
          <TaskList tasks = {tasks} 
          updateTask = {updateTask} deleteTask = {deleteTask}/>
          
          <Progresstracker tasks ={tasks}/>
          <button onClick={clearTasks} className="clr-btn">Clear All tasks</button>
    </div>
  )
}