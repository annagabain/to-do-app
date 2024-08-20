import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addNewTask() {
    if (newTask.length == 0) {
      alert('Add task desciption')
    } else {
      setTasks(([...tasks, newTask]));
      setNewTask("");
      console.log('task added')

    }
  }


  function deleteSelectedTask() {
    console.log('task deleted')
  }


  return (
    <>
      <section className='newcard'>
        <div>
          <h1>My ToDo-s</h1>
        </div>
        <div className='add-new-field'>
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Add a new task"
            className="task-input"
          />
          <button className='newitembutton' onClick={addNewTask}>
            <p>+</p>
          </button>
        </div>
      </section>


      <section className="cards">

        {tasks.length == 0 ? (<h3>No Tasks to show:</h3>) : (<h3>My Tasks:</h3>)}
        <ul>
          {
            tasks.map((item, i) => (
              <li key={i}>{item}
                <button onClick={deleteSelectedTask}>
                  <p>-</p>
                </button></li>
            ))
          }
        </ul>
      </section>

    </>
  )
}

export default App
