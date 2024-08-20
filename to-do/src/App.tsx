import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<string[]>(["make the submission form", "test the form"]);


  return (
    <>
      <section className='newcard'>
        <div>
          <h1>My ToDo-s</h1>
        </div>

        <div >
          <button className='newitembutton' onClick={() => console.log('item added')
          }>
            <p>Add new item +</p>
          </button>
        </div>
      </section>


      <section className="cards">
      <h3>To Do Items:</h3>

        <ul>

          {
            items.map((item, i) => (
              <li key={i}>{item}
                <button onClick={() => console.log('item removed')
                }>
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
