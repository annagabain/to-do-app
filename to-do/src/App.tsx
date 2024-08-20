import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>(["make the submission form", "test the form"]);

  function addNewTask() {
    console.log('task added')
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
        <div >
          <button className='newitembutton' onClick={addNewTask}>
            <p>Add new item +</p>
          </button>
        </div>
      </section>


      <section className="cards">
        <h3>My Tasks:</h3>

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
