import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

//So how the react expects an element from the user
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_cblank'},
  'Click me to visit google '
)
//Not working in strict mode 
createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
