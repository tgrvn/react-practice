import React, { useContext } from "react";
import MyButton from "../components/ui/button/MyButton";
import MyInput from "../components/ui/input/MyInput";
import { AuthContext } from "../context";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  }

  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>LogIn</MyButton>
      </form>
    </div>
  );
}
