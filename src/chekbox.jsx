import { useState } from "react";

function Check(){
    const [skills ,setskills]=useState([])
    const handleskills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setskills([...skills,event.target.value])
        } else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
        
    } 
    return(
        <div>
            <label htmlFor="java">
                <input onChange={handleskills} type="checkbox" name="lang" id="java" value="java"/> Java
            </label>
                <label htmlFor="JavaScript">
                <input onChange={handleskills}  type="checkbox" name="lang" id="JavaScript"  value='javaScript'/> JavaScript
            </label>
                <label htmlFor="Python">
                <input onChange={handleskills}  type="checkbox" name="lang" id="Python" value="Python" /> Python
            </label>
                <label htmlFor="AIML">
                <input onChange={handleskills}  type="checkbox" name="lang" id="AIML" value=" AIML"/> AIML
            </label>
            
            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Check;