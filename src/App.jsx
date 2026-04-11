import { useEffect, useState } from "react";
import Api from './Api';
import Header from "./Header";

import Product from "./Product";
import CartList from "./CartList";
import { Routes, Route } from "react-router-dom";
// import store from "./redux/Store";


function App() {
// const[userdata,setuserdata] = useState([]);  
// useEffect(()=>{
//   getuserdata();
// },[])
// const getuserdata  = async()=>{
//   let url = "https://dummyjson.com/users";
//   let response  = await fetch(url);
//   let data =  await response.json();
//   // console.log(data);
//  setuserdata(data.users);
//  console.log(data.users);
// }
  return (
    <>
   {/* <div className="max-w-4xl mx-auto mt-10 p-4">
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-4 font-medium text-gray-900">First Name</th>
          <th className="px-6 py-4 font-medium text-gray-900">Last Name</th>
          <th className="px-6 py-4 font-medium text-gray-900 text-center">Age</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {userdata.map((user) => (
          <tr key={user.id} className="hover:bg-amber-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">{user.firstName}</td>
            <td className="px-6 py-4">{user.lastName}</td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-600">
                {user.age} yrs
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div> */}
{/* <Api/> */}
 <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartList/>} />
      </Routes>
<Header/>

{/* <Store /> */}

    </>
  )
}

export default App
