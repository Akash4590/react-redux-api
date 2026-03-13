import { useState } from "react";
import "./App.css";
function Validation() {
  const [name, setname] = useState("");
  const [nameerr, setnameerr] = useState("");

  const [password, setpassword] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const handlename = (event) => {
    const value = event.target.value;
    setname(value);
    if (value.length > 5) {
      setnameerr("Please enter valid user name");
    } else {
      setnameerr("");
    }
  };

  const handlepassword = (event) => {
  let regex = /^[A-Za-z0-9]+$/;
    const value = event.target.value;
    setpassword(value);
    if (regex.test(value)) {
      setpassworderr("");
    } else {
      setpassworderr("Please enter valid password");
    }
  };
  return (
    <div>
<input type="text" placeholder="enter name"
 onChange={handlename}
  className={nameerr ? "error" : ""}/><br />
<span style={{ color: "red" }}>{nameerr}</span><br />
<input type="text" placeholder="enter password"
onChange={handlepassword} 
className={passworderr ? "error" : ""}/><br />
<span style={{ color: "red" }}>{passworderr}</span><br />
<button disabled={nameerr || passworderr}>
  Login
</button>
    </div>
  );
}

export default Validation;