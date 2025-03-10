import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div>
      <h1>Redux Toolkit Todo List</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
