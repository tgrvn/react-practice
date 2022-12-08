import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

export default function Navbar() {
  const { setIsAuth } = useContext(AuthContext);

  function loggout() {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }

  return (
    <div className="navbar">
      <MyButton onClick={loggout}>LogOut</MyButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}
