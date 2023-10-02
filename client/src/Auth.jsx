import { useState } from "react";
import Login from "./auth/login";
import Register from "./auth/register";


export default function Auth(props) {
  const [haveAccount, setHaveAccount] = useState(props.val);
  
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {haveAccount ? <Login /> : <Register />}
      </div>
    </>
  );
}
