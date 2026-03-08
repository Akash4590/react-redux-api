
import { useEffect, useState } from "react";


 function Userlist(){
 const[userdata,setuserdata] = useState([]); 
 const[loading,setloading] = useState(false);
 useEffect(()=>{
  getuserdata();
  setloading(true);
 },[]) 
const getuserdata = async()=>{
  const url = "http://localhost:3000/users";
  let response  = await fetch(url);
  response = await response.json();
  setuserdata(response);
  // console.log(response);
  setloading(false);
}
              
 return(
<div>
<h1>Makes routes and pages for add user and user list ui</h1>
{
  loading ? <h1>Loading...</h1>:
userdata.map((user)=>(
<ul className="flex justify-around border border-black m-1 p-1">
  <li key={user.name} className="text-xl font-light">{user.firstName}
  </li>
  <li key={user.name} className="text-xl font-light">{user.lastName}
  </li>
  <li key={user.name} className="text-xl font-light">{user.age}
  </li>
</ul>
))
}
 </div>        
   )           
 }
 export default Userlist;
 