import { useEffect, useState } from 'react'
import './App.css'
// import Application from './components/Posts'
// import Time, { Use, Data } from './clock'
// import Login from './Login'
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import Load from './Crud'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentTable from './StudentTable'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import ViewDetail from './ViewDetail'
function App() {

  // const displayName = (name) => {
  //   alert(name)
  // }
  

  // const getUser=()=>{
  //   alert("get user function called")
  // }

  // const Heading = styled.h3`
  //   color: red;
  //   border: 2px solid black;
  // `

  // const [counter, setCounter] = useState(0)
  // const [color, setColor] = useState("yellow")
  // const [fruit, setFruit] = useState("Apple")

  // useEffect(() => {
  //   callonce()
  // }, [])

  // function callonce() {
  //   console.log("function called")
  // }

  // function change() {
  //   setFruit("Mango")
  // }

  //   const [pending, setPending] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // prevent default form reload
  //   setPending(true);
  //   await new Promise(res => setTimeout(res, 2000)); // simulate API call
  //   console.log("submit");
  //   setPending(false);
  // };

   
  // function CustomerForm({ pending }){
  //   return(
  //     <div>
  //       <input type='text' placeholder='Enter UserName'/>
  //       <br/><br/>
  //       <input type='text' placeholder='Enter password'/><br></br><br></br>
  //       <button disabled={pending}> {pending ? "Submitting..." : "Submit"}
  //       </button>
  //     </div>
  //   )
  // }
  return (
    <>
      <div>
    <Load/>
   {/* <Application/>  */}
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<StudentTable/>}></Route>
    <Route path='/Student/Create' element={<CreateStudent/>}></Route>
    <Route path='/Student/edit/:Studentid' element={<EditStudent/>}></Route>
    <Route path='/Student/View/:Studentid' element={<ViewDetail/>}></Route>
  </Routes>
  </BrowserRouter>
        {/* <Button variant="success">Login</Button>
        <br /><br />
        <Heading>styled component</Heading>

        <button onClick={() => setCounter(counter + 1)}>
          count {counter}
        </button>
        <br />
      
        <select onChange={(event) => setColor(event.target.value)}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
        </select>

        <h4>Hello</h4>
        <h1 id="ab">{fruit}</h1>
        <button onClick={change}>Change</button> */}


        {/* <form onSubmit={handleSubmit}>

           <CustomerForm pending={pending} />  

        </form>
      */}
      </div>

      {/* <Login /> */}
      {/* <Use /> */}
      {/* <Time data={color} /> */}
      {/* <Data displayName={displayName} name="Abhi" getUser={getUser} />
      <Data displayName={displayName} name="Sam" getUser={getUser}/>
      <Data displayName={displayName} name="Karan"getUser={getUser} />
      <Data displayName={displayName} name="Ajay" getUser={getUser} /> */}
    </>
  )
}

export default App
