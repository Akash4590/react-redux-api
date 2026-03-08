// import { useEffect, useState } from "react";


//  function Api(){
//  const[userdata,setuserdata] = useState([]); 
//  const[loading,setloading] = useState(false);
//  useEffect(()=>{
//   getuserdata();
//   setloading(true);
//  },[]) 
// const getuserdata = async()=>{
//   const url = "http://localhost:3000/users";
//   let response  = await fetch(url);
//   response = await response.json();
//   setuserdata(response);
//   // console.log(response);
//   setloading(false);
// }
              
//  return(
// <div>
// <h1>integrate json server api and loader</h1>
// {
//   loading ? <h1>Loading...</h1>:
// userdata.map((user)=>(
// <ul className="flex justify-around border border-black m-1 p-1">
//   <li key={user.name} className="text-xl font-light">{user.firstName}
//   </li>
//   <li key={user.name} className="text-xl font-light">{user.lastName}
//   </li>
//   <li key={user.name} className="text-xl font-light">{user.age}
//   </li>
// </ul>
// ))
// }
//  </div>        
//    )           
//  }
//  export default Api;


import {Routes,Route,NavLink} from "react-router-dom";

import Userlist from "./Userlist";
import Useradd from "./Useradd";
 function Api(){          
 return(
<div>
<ul className="flex w-[400px] justify-around list-none bg-gray-200 p-3 rounded-md">
  <li>
    <NavLink to="/" className="text-lg font-semibold text-blue-600 hover:text-red-500">Home</NavLink>
  </li>

  <li>
    <NavLink to="/add" className="text-lg font-semibold text-blue-600 hover:text-red-500" > Add User</NavLink>
  </li>
</ul>

<Routes>
<Route path="/" element = {<Userlist/>}></Route>
<Route path="add" element = {<Useradd/>}></Route>
</Routes>
 </div>        
   )           
 }
 export default Api;