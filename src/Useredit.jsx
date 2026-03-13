import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Useredit(){
const[firstName,setfirstName] = useState("");  
const[lastName,setlastName] = useState("");                          
const[email,setemail] = useState("");              
const[age,setage] = useState("");               
const {id}  = useParams();
const navigate = useNavigate();


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
const updateuserdata = async () => {
  console.log(firstName, lastName, email, age);
 const url = "http://localhost:3000/users/"+id;
  let response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      age
    })
  });
  const data = await response.json();
  console.log(data);
  if(data){
   alert("user data update");
   navigate("/");           
  }
};


return(
<div className="text-center">
<h1>edit user details</h1> 
<input type="text" placeholder="enter name" value = {firstName}
onChange={(event)=>setfirstName(event.target.value)} /> <br /> <br />           
<input type="text" placeholder="enter lastname" value = {lastName}
onChange={(event)=>setlastName(event.target.value)} /> <br /> <br />           
          
<input type="text" placeholder="enter email" value = {email}
onChange={(event)=>setemail(event.target.value)} /> <br /> <br />           
<input type="text" placeholder="user age" value = {age} 
onChange={(event)=>setage(event.target.value)}/> <br /> <br /> 
<button className="bg-gray-500 px-4 py-2 text-white rounded-full"
  onClick={updateuserdata}>
  edit user
</button>          
</div>              
)              
}
export default Useredit;