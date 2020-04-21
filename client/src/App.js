import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "../src/components/Nav";
import Search from "../src/components/Search"


function App() {
  return (
    <div className="App">
    <Nav />
    <Search />
    </div>
  );
}


export default App;
