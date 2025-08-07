import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Name from './New'
import Login from './New'
// import Btn from './User'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <h1>hello</h1>
    <User/> 
    <Name/>
    <Input/>
    
    </>
  )
}

function Input(){
  return(
    <div>
      <h3> Welcome React</h3>
    </div>)
}


export default App;
