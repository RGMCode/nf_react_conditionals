import { useState } from 'react'
import './App.css'

// Conditionals = condition ? JSX : null

function App() {
  const [count, setCount] = useState(0)

    // let message = null;
    // if (count>5){
    //     message = <p>The count is greater than 5</p>
    // }

    // const message = (count > 5 ) ? <p>The count is greater than 5</p> : null;


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          {(count > 5 ) ? <p>The count is greater than 5</p> : null} //inline
          {/*{message}*/}
      </div>
    </>
  )
}

export default App
