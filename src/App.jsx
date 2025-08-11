import { useState } from 'react'
import Counter from './Counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Name from './New'
import Login from './New'
// import Btn from './User'


function App() {
  // const [count, setCount] = useState(0)
  const [fruit,setFruit]=useState("Apple");

   function change(){
        setFruit("Mango")
  }
  return (
    <>
    <div>
    <h1>hello</h1>
       <h1 id='ab'>{fruit}</h1>
       <button onClick={change}>Change</button>
       </div>
    <User/> 
    <Name/>
    <Input/>
    <Counter/>
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
