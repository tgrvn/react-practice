import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


/* 
<button onClick={handleClick}>click me</button> === 
React.createElement('button', {onClick: handleCLick}, 'click me')
*/
