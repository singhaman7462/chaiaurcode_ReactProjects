import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <div>
        <h1>Chai aur React</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
