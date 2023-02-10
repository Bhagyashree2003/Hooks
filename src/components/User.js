import React, { useContext } from "react";
import { HookContext } from "../context/HookContext";

function User() {
  const { username } = useContext(HookContext);
  return (
    <div className="container">
      <h1>User : {username}</h1>
    </div>
  );
}

export default User;
