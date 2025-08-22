import { useState } from "react";
import { Link } from "react-router-dom";
function CreateStudent() {
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[place,setPlace]=useState("")
    const[phone,setPhone]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({id,name,place,phone});
        fetch("http://localhost:3000/students")
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err.message))
        
    }
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Student</h2>

      <form  onSubmit={handleSubmit}className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input type="text" id="id" name="id" className="form-control" value={id} onChange={e=>setId(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-control" value={name} onChange={e=>setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="place" className="form-label">Place</label>
          <input type="text" id="place" name="place" className="form-control" value={place} onChange={e=>setPlace(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" id="phone" name="phone" className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} />
        </div>
        <div>
        <button type="submit" className="btn btn-primary me-2">Save</button>
        <Link to="/" className="btn btn-warning">Back</Link>
        </div>
      </form>
    </div>
  );
}

export default CreateStudent;
