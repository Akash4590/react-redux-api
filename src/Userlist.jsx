
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

 function Userlist(){
 const[userdata,setuserdata] = useState([]); 
 const[loading,setloading] = useState(false);
const navigate = useNavigate();
 useEffect(()=>{
  getuserdata();
  setloading(true);
 },[]) 
//  for getting data we use this function
const getuserdata = async()=>{
  const url = "http://localhost:3000/users";
  let response  = await fetch(url);
  response = await response.json();
  setuserdata(response);
  // console.log(response);
  setloading(false);
}
//  for deleting data we use this function
const deleteuserdata = async (id) => {
  const url = "http://localhost:3000/users";
  let response = await fetch(url + "/" + id, {
    method: "DELETE",
  });

  let data = await response.json();
  if (data) {
    alert("User deleted successfully");
  }
  console.log("Deleted user ID:", id);
};
//  for editing data we use this function
const edituserdata = (id)=>{
  navigate("/edit/"+id)
}
              
 return(
<div>
<h1>Makes routes and pages for add user and user list ui</h1>
<ul className="flex justify-around border border-black m-1 p-1 font-bold">
  <li>First name</li>
  <li>last name</li>
  <li>email</li>
  <li>age</li>
  <li>action</li>
</ul>
{
  loading ? <h1>Loading...</h1>:
userdata.map((user)=>(
<ul className="flex justify-around border border-black m-1 p-1">
  <li key={user.name} className="text-xl font-light">{user.firstName}
  </li>
  <li key={user.name} className="text-xl font-light">{user.lastName}
  </li>
  <li key={user.name} className="text-xl font-light">{user.email}
  </li>
  <li key={user.name} className="text-xl font-light">{user.age}
  </li>
  <li>
    <button className="bg-red-500 text-white px-4 py-2 rounded"
    onClick={() => deleteuserdata(user.id)}>
      Delete
    </button>
   <button className="bg-blue-500 text-white px-2 py-2 rounded"
   onClick={()=>edituserdata(user.id)}>
   edit
   </button>
  </li>
</ul>
))
}
 </div>        
   )           
 }
 export default Userlist;
 