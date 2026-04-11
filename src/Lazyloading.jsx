// import { use, Suspense } from "react";

// const fetchdata = () =>
//   fetch("https://dummyjson.com/users").then((res) => res.json());

// const userresource = fetchdata();

// export function Lazyloading() {
//   return (
//     <div>
//       <h1>Rest API in React JS</h1>

//       <Suspense fallback={<p>Loading...</p>}>
//         <User userresource={userresource} />
//       </Suspense>
//     </div>
//   );
// }

// const User = ({ userresource }) => {

//   const userdata = use(userresource);

//   console.log(userdata.users);

//   return (
//     <div>
//       <h2>User List</h2>
//  {userdata.users.map((user) => (
//         <p key={user.id}>{user.firstName}</p>
//       ))}
     

//     </div>
//   );
// };