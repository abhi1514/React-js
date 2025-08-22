// import React, { useState } from "react";
// import "./Login.css";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `http://antiquedevapi-001-site1.jtempurl.com/api/User/LogIn?username=${username}&password=${password}`,
//         {
//           method: "POST",
//         }
//       );

//       if (!response.ok) {
//         const errData = await response.json().catch(() => ({}));
//         throw new Error(errData.message || "Login failed!");
//       }

//       const data = await response.json();
//       console.log("API Response:", data);

//       if (data.data?.token) {
//         setMessage("Login Successful");
//         localStorage.setItem("token", data.data.token);
//       } else {
//         setMessage(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("Error: " + error.message);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h2 className="login-title">Login Page</h2>
//         <form onSubmit={handleLogin} className="login-form">
//           <input
//             type="text"
//             placeholder="Enter Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="login-input"
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="login-input"
//           />
//           <button type="submit" className="login-btn">Login</button>
//         </form>
      
//         <p
//           className={`login-message ${
//             message.includes("Successful")
//               ? "success"
//               : message.includes("Invalid") || message.includes("Error")
//               ? "error"
//               : ""
//           }`}
//         >
//           {message}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
