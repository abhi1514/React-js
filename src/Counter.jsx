import { useState } from 'react'
 const Counter=()=>{
    // const[ count,setcount] =useState(0);
     const[ display,setdisplay] = useState(true);
    return(
        <div>
            {/* <h1>counter:{count}</h1>
            <button id="add" onClick={()=>setcount(count+1)}> Update</button>
            <button id="min" onClick={()=>setcount(count-1)}>Decrese</button> */}
          {
             
            display?<h1 id='name'>Abhishek Bachate</h1>:null
          }
             
        </div>
    )
 }

 export default Counter;