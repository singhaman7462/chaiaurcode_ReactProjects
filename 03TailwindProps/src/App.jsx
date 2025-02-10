import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-2xl'>Tailwind test</h1>
      <Card userName="Aman Singh" btnText="Click Me"/>
      <Card userName="Random User" btnText="Random Click"/>
    </>
  )
}

export default App
