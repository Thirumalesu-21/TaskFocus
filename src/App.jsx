import Taskform from "./Components/Taskform.jsx"
import TaskList from "./Components/TaskList.jsx"
import Progresstracker from "./Components/Progresstracker.jsx"

function App() {
  return (
    <div>
      <h1>TASK FOCUS</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform />
          <TaskList />
          <Progresstracker />
          <button>Clear All tasks</button>
    </div>
  )
}
export default App