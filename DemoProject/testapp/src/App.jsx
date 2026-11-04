import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Saddy + Sammy</h1>
      <div className="card">
        <h2>I Love you so so so so so much my darling Simran</h2>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Comming for Marriage {count}
        </button>
        <p>
          Hey, world! Welcome to the Sammy-Saddy Paradise.
        </p>
      </div>
    </>
  )
}

export default App
