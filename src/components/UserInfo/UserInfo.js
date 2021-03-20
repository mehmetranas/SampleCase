import React from "react";
import AuthButton from "../AuthButton";
import { useAuth } from "../../UserProvider/User";

function UserInfo() {
  const { state } = useAuth();
  if (state.name) {
    return <p>{state.name}</p>;
  }

  return <AuthButton />;
}

export default UserInfo;
