import React, { useEffect, useState } from "react";
import Navbar from "./components/ui/navbar/Navbar";
import { AuthContext } from "./context";
import RouterConfig from "./router/RouterConfig";
import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }

    setIsLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
      >
        <Navbar />
        <RouterConfig />
      </AuthContext.Provider>
    </>
  );
}

export default App;
