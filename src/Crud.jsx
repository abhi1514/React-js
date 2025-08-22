
import { useState,useTransition } from "react";

function Load(){
const[pending,startTransition]=useTransition();

const handleButton =()=>{
 startTransition(async()=>{
   await new Promise(res=>setTimeout(res,5000))
 })

}
  return(
   <div>
    {
      pending?
      <img  style={{width:"100px"}}src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
      :null
    }
   <button onClick={handleButton}>Submit</button>
   </div>
  )
}
export default Load;