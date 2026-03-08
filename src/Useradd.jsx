import { useState } from "react";

function Useradd(){
const[name,setname] = useState("");              
const[lastname,setlastname] = useState("");              
const[email,setemail] = useState("");              
const[age,setage] = useState(""); 
const createuser =async ()=>{
console.log(name,email,age); 
const url = "http://localhost:3000/users";
let response  = await  fetch(url,{
 method: "Post",
 body: JSON.stringify({
  firstName:name,
  lastName:lastname,
  email:email,
  age:age            
 })             
})  
let data =  await response.json(); 
if(data){
alert("user added successfully") ;             
}        
}             
return(
<div className="text-center">
<h1>Add new user</h1>
<input type="text" placeholder="entername"
onChange={(event)=>setname(event.target.value)} /> <br /> <br />
<input type="text" placeholder="enterlastname"
onChange={(event)=>setlastname(event.target.value)} /> <br /> <br />

<input type="text" placeholder="enteremail" 
onChange={(event)=>setemail(event.target.value)}/> <br /> <br />             
<input type="text" placeholder="enterage"
onChange={(event)=>setage(event.target.value)} />  <br /> <br />            
 <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
 onClick={createuser}>
  Add User
</button>         
            
</div>              
)              
}
export default Useradd;