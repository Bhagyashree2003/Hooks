import React, { useContext } from "react";
import { HookContext } from "../context/HookContext";

function Login() {
  const { setUsername } = useContext(HookContext);
  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Enter your text"
      />
    </div>
  );
}

export default Login;
