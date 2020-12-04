import React from "react";
//import logo from './logo.svg';
import "./App.css";
import MainDiv from "./components/MainDiv/MainDiv";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainDiv />
    </div>
  );
}

export default App;
