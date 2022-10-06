import React from "react";
import "./style.css";
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default function FavoriteColor(){

  const [color, setColor] = useState("red");
  return(
    <>
      <h1>My favorite color is {color} </h1>
      <button
    
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
