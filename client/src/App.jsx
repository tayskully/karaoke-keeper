import { useState } from "react";
import logo from "/kk-logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/tayskully/karaoke-keeper" target="_blank">
          <img src={logo} width="200px" className="logo" alt="karaoke keeper logo" />
        </a>
      </div>
      <h1>Karaoke Keeper</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
