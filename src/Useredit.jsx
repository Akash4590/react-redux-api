import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function Useredit(){
const[firstName,setfirstName] = useState("");  
const[lastName,setlastName] = useState("");                          
const[email,setemail] = useState("");              
const[age,setage] = useState("");               
const {id}  = useParams();


useEffect(()=>{
 getuserdata();             
},[])
const getuserdata =async  ()=>{
const url = "http://localhost:3000/users/"+id; 
let response  =  await fetch(url);
let data =  await response.json();

console.log(data);
setfirstName(data.firstName);
setlastName(data.lastName);
setemail(data.email);
setage(data.age);
}
return(
<div className="text-center">
<h1>edit user details</h1> 
<input type="text" placeholder="enter name" value = {firstName} /> <br /> <br />           
<input type="text" placeholder="enter lastname" value = {lastName} /> <br /> <br />           
          
<input type="text" placeholder="enter email" value = {email} /> <br /> <br />           
<input type="text" placeholder="user age" value = {age} /> <br /> <br /> 
<button className="bg-gray-500 px-4 py-2 text-white rounded-full">edit user</button>          
</div>              
)              
}
export default Useredit;