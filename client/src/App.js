import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import Carousel from "./components/Carousel";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Additem from "./pages/additem";
function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route exact path={["/", "/Additem"]}>
            <Additem />
          </Route>
          <Route path='/'>
            <Carousel />
          </Route> 
        </Switch>
        <Footer />
      </Router>
         

    </div>
  );
}

export default App;
