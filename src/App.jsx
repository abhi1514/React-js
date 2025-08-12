import { useState } from 'react'
import Counter from './Counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import User from './User'
import Check from './chekbox'
// import Name from './New'
// import Login from './New'
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
    <h4>hello</h4>
       <h1 id='ab'>{fruit}</h1>
       <button onClick={change}>Change</button>
       </div>
    {/* <User />  */}
    <Check/>
    {/* <Name/> */}
    {/* <Input/> */}
    {/* <Counter/> */}
    </>
  )
}

// function Input(){
//   return(
//     <div>
//       <h3> Welcome React</h3>
   
//     </div>)
// }


export default App;
