import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "../src/components/Nav"
import Lists from "./pages/List";

function App() {
  return (
    <div>
    <Nav />
    <Lists />

    </div>
  );
}


export default App;
