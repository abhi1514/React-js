// import { useEffect, useState, useRef } from "react";

// function Time({ data }) {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // cleanup to prevent memory leaks
//   }, []);

//   return (
//     <div>
//       <h1 style={{ color: data, backgroundColor: "black" }}>{time}</h1>
//     </div>
//   );
// }

// export function Use() {
//   const inputRef = useRef(null);

//   const inputHandler = () => {
//     inputRef.current.focus();
//     inputRef.current.style.color = "red";
//   };

//   return (
//     <div>
//       <h1>Use ref</h1>
//       <input ref={inputRef} type="text" placeholder="Enter user name" />
//       <button onClick={inputHandler}>Focus on input field</button>
//     </div>
//   );
// }

// export function Data({ displayName, name,getUser }) {
//   // either always use "abhi"
//   // const fixedName = "abhi";

//   // OR use the prop directly
//   return (
//     <div>
//       <button onClick={() => displayName(name)}>Display Name</button>
//       <button onClick={()=> getUser()}>getUser</button>
//     </div>
//   );
// }

// export default Time;
