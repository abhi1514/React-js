// import { useState } from "react";

// function Button(){
//     const[gender,setgender]=useState("")
//     const[city,selectcity]=useState("satara")
//     return(
//         <div>
//             <label htmlFor="Male">
//           <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender" value={"Male"} id="Male"/>Male
//           </label>
//           <label htmlFor="Female">
//           <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender" value={"Female"} id="Female"/>Female</label>
//           <h3>selected gender:-{gender}</h3>
//          <br></br>
//          <select  onChange={(event)=>selectcity(event.target.value)}>
//             <option  value={"Kolhapur"}>Kolhapur</option>
//             <option  value={"Pune"}>Pune</option>
//             <option  value={"Mumbai"}>Mumbai</option>
//             <option  onChange={(event)=>selectcity(event.target.value)}value={"karad"}>karad</option>
//          </select>
//           <h3>select city:-{city}</h3>
//         </div>
//     )
//  }

//  export default Button;