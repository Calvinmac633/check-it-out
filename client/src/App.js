import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import AppBar from "./components/AppBar";
// import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import {ListPage} from "./pages/ListPage"
import {Home} from "./pages/Home"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import 'font-awesome/css/font-awesome.min.css';
import Lookup from "./components/Lookup";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route exact path="/lists/:id">
            <ListPage />
          </Route>
          <Route path='/Lookup'>
            <Lookup />
          </Route>
          <Route path='/Search'>
            <Search />
          </Route>
          <Route path='/'>
            <Home />
          </Route> 
        </Switch>
        <Footer />
      </Router>
         

    </div>
  );
}

export default App;
