import React, { useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import UserData from "./components/UserData.js";
import CreateUserFormik from "./components/CreateUer-Formik";
import CreateUser3 from './components/CreateUser3.jsx';
function App() {
  const [show, setShow] = useState("add-3");

  const btnStyle = { marginLeft: "2%", marginRight: "2%", background: "blue", borderRadius: "15%", padding: "1%", color: "white" };
  return (
    <div className="App">
      <div style={{ width: "100%", margin: "auto", backgroundColor: "honeydew", padding: "3%" }} >
        <div style={{ display: "inline" }}>select component to show it:</div>

        <button style={btnStyle} onClick={() => setShow("view")} >View User </button>
        <button style={btnStyle} onClick={() => setShow("add-state")} >Add User State </button>
        <button style={btnStyle} onClick={() => setShow("add-formik")} >Add User Formik </button>
        <button style={btnStyle} onClick={() => setShow("add-3")} >Add User 3 </button>
      </div>
      {show === "add-3" && <CreateUser3 />}
      {show === "add-state" && <CreateUser />}
      {show === "add-formik" && <CreateUserFormik />}
      {show === "view" && <UserData />}
    </div>
  );
}

export default App;
