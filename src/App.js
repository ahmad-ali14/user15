import React, { useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import UserData from "./components/UserData.js";

function App() {
  const [show, setShow] = useState("add");
  return (
    <div className="App">
      <div>
        <button onClick={() => setShow("view")} >View</button>
        <button onClick={() => setShow("add")} >Add</button>
      </div>

      {show === "add" && <CreateUser />}
      {show === "view" && <UserData />}
    </div>
  );
}

export default App;
