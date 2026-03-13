// import { useState } from "react";
import "./App.css";
// function Validation() {
//   const [name, setname] = useState("");
//   const [nameerr, setnameerr] = useState("");



//   const [password, setpassword] = useState("");
//   const [passworderr, setpassworderr] = useState("");
//   const handlename = (event) => {
//     const value = event.target.value;
//     setname(value);
//     if (value.length > 5) {
//       setnameerr("Please enter valid user name");
//     } else {
//       setnameerr("");
//     }
//   };

//   const handlepassword = (event) => {
//   let regex = /^[A-Za-z0-9]+$/;
//     const value = event.target.value;
//     setpassword(value);
//     if (regex.test(value)) {
//       setpassworderr("");
//     } else {
//       setpassworderr("Please enter valid password");
//     }
//   };
//   return (
//     <div>
// <input type="text" placeholder="enter name"
//  onChange={handlename}
//   className={nameerr ? "error" : ""}/><br />
// <span style={{ color: "red" }}>{nameerr}</span><br />
// <input type="text" placeholder="enter password"
// onChange={handlepassword} 
// className={passworderr ? "error" : ""}/><br />
// <span style={{ color: "red" }}>{passworderr}</span><br />
// <button disabled={nameerr || passworderr}>
//   Login
// </button>
//     </div>
//   );
// }

// export default Validation;


import { useActionState } from "react";
function Validation (){
const handlelogin = (previusdata,data)=>{
let name = data.get("name");              
let password = data.get("password"); 
let regex = /^[A-Za-z0-9]+$/;             
// console.log(name,password); 
if (!name || name.lenght> 5){
return {error:"please enter valid user name"}
}  else if (!regex.test(password)){
return {error:"please enter valid password"}
} 
else{
 return {message:"login successful"}             
}          
}              
const [data,action] =  useActionState(handlelogin)
console.log(data);
 return(
<div>
<h1>Useaction state in react js</h1>
{ data ?.message && <span>{data?.message}</span>
}
{ data ?.error && <span>{data?.error}</span>
}
<form action={action}>
<input type="text" name="name" placeholder = "enter user name" /> <br/>
<input type="password" name= "password" placeholder = "enter password" /> <br/> <br />
<button disabled={data?.error}>submit</button>
              
</form>              
</div>              
 )             
}
export default Validation;