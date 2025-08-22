import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentTable() {
  const [students, setStudents] = useState([]); // should be []

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Student Record</h2>

      <div className="table-responsive">
        <Link to="/student/create" className="btn btn-primary">
          Add New Student
        </Link>
        <br />
        <br />
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <tr key={item.id}>
                  {" "}  {/* ✅ added key */}
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>{item.phone}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-danger me-2">Delete</button>
                  <button className="btn btn-sm btn-primary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
