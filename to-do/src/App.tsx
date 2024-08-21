import { useState } from 'react';
import './App.css';
import './index.css';

function App() {

  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<{ description: string; done: boolean }[]>([]);



  function addNewTask() {
    if (newTask.length === 0) {
      alert('Add task description');
    } else {
      setTasks([...tasks, { description: newTask, done: false }]);
      setNewTask("");
      console.log('task added');
    }
  }


  // handles Enter key press in the input field
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addNewTask();
    }
  }



  // toggles the done status of a task
  function toggleDone(index: number) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    console.log(`the "${tasks[index].description}" task is now ${updatedTasks[index].done ? 'done' : 'not done'}`);
  }


  // deletes a selected task
  // function deleteSelectedTask(index: number) {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   alert(`Delete "${tasks[index].description}" ?`)
  //   setTasks(updatedTasks);
  //   console.log(`the "${tasks[index].description}" task is now deleted`);
  // }

  function deleteSelectedTask(index: number) {
    // Show a confirmation dialog
    const confirmed = window.confirm(`Are you sure you want to delete "${tasks[index].description}"?`);
    if (confirmed) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      console.log(`the "${tasks[index].description}" task is now deleted`);
    }
  }


  return (
    <>
      <section className='newcard'>
        <div>
          <h1>My ToDo-s</h1>
        </div>
        <div className='add-new-field'>
          <input
            id='add-new'
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task"
            className="task-input"
          />
          <button className='newitembutton' onClick={addNewTask}>
            <p>+</p>
          </button>
        </div>
      </section>

      <section className="cards">
        {tasks.length === 0 ? (
          <h3>No Tasks to show:</h3>
        ) : (
          <>
          <article className="cards-titles">
          <h3>Status:</h3>
          <h3>My Tasks:</h3>
          <h3>Delete:</h3>
          </article>
         

          </>


        )}
        <ul>
          {tasks.map((task, i) => (
            <li key={i} className={task.done ? 'task-done' : 'task'}>
              <button
                className={task.done ? 'done' : 'un-done'}
                onClick={() => toggleDone(i)}
              >
                {task.done ? 'completed' : 'pending...'}
              </button>
              {task.description}
              <button onClick={() => deleteSelectedTask(i)} className="delete-task-button">
                <p>-</p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
