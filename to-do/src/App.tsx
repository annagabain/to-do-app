import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My ToDos</h1>
      </div>

      <div className="card">
        <button onClick={() => console.log('item added')
        }>
          Add new item +
        </button>
      </div>

    </>
  )
}

export default App
