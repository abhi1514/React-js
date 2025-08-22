// import React, { useEffect, useState } from "react";
// import axios from "axios";



// function Application() {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [email, setemail] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");


//   const fetchPosts = async () => {
//     const res = await axios.get("http://localhost:3000/posts");
//     setPosts(res.data);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);


//   const addPost = async () => {
//     if (!title || !author) return alert("Both fields required!");
//     await axios.post("http://localhost:3000/posts", { title, author });
//     fetchPosts();
//     setTitle("");
//     setAuthor("");
//     setemail("")
//      showPopup("Post added successfully ");
//   };


//   const deletePost = async (id) => {
//     await axios.delete(`http://localhost:3000/posts/${id}`);
//     fetchPosts();
//     showPopup ("Post deleted successfully ");
    
//   };


//   const editPost = async () => {
//     await axios.put(`http://localhost:3000/posts/${editId}`, { title, author ,email});
//     fetchPosts();
//     setTitle("");
//     setAuthor("");
//     setEditId(null);
//     setemail("")

//     showPopup("Post updated successfully ");
//   };


//     const showPopup = (msg) => {
//     setSuccessMsg(msg);
//     setTimeout(() => setSuccessMsg(""), 2000);
//   };
//   return (
//     <div className="container py-4">
//       <h1 className="text-center mb-4">React CRUD </h1>

//         {successMsg && (
//         <div className="alert alert-success text-center" role="alert">
//           {successMsg}
//         </div>
//       )}


//       <div className="card p-3 mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="form-control mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="form-control mb-2"
//         />
//           <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setemail(e.target.value)}
//           className="form-control mb-2"
//         />

//         {editId ? (
//           <button className="btn btn-warning w-100" onClick={editPost}>
//             Update Post
//           </button>
//         ) : (
//           <button className="btn btn-primary w-100" onClick={addPost}>
//             Add Post
//           </button>
//         )}
//       </div>


//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Email</th>
//             <th>Actions</th>
          
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map((p) => (
//             <tr key={p.id}>
//               <td>{p.id}</td>
//               <td>{p.title}</td>
//               <td>{p.author}</td>
//               <td>{p.email}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-warning me-2"
//                   onClick={() => {
//                     setEditId(p.id);
//                     setTitle(p.title);
//                     setAuthor(p.author);
//                     setemail(p.email);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={() => deletePost(p.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Application

