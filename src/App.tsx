import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    let message = null;

    if (count>5){
        message = <p>The count is greater than 5</p>
    }


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          {message}
      </div>
    </>
  )
}

export default App
