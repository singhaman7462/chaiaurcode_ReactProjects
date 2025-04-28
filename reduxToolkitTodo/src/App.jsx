import { useRef } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const inputRef=useRef(null);
  return (
    <div>
      <h1>Redux Toolkit Todo List</h1>
      <AddTodo inputRef={inputRef}/>
      <Todos inputRef={inputRef}/>
    </div>
  )
}

export default App
