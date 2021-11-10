import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: "1",
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: "2",
            text: "Meeting at School",
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: "3",
            text: "Food Shopping",
            day: "Feb 5th at 2:30pm",
            reminder: false
        }
    ]
)

// ADD TASK
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100000) + 1
  const newTask = {...task, id}
  setTasks([...tasks, newTask])
  console.log(tasks)
}

// DELETE TASK
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

// TOGGLE REMINDER
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
}

// SHOW ADD TASK
const showAdd = () => {
  setShowAddTask(!showAddTask)
}

  return (
    <div className="container">
      <Header onClick={showAdd} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
