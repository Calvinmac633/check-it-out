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
import Footer from "./components/Footer";
<<<<<<< HEAD
import Additem from "./pages/additem";
=======
import {ListPage} from "./pages/ListPage"
import {Home} from "./pages/Home"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import 'font-awesome/css/font-awesome.min.css';
import Lookup from "./components/Lookup";

>>>>>>> 25126a7151ac24f4c1ce706f9266aaefee877f91
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
          <Route path='/List'>
            <ListPage />
          </Route>
<<<<<<< HEAD
          <Route exact path={["/", "/Additem"]}>
            <Additem />
=======
          <Route path='/Lookup'>
            <Lookup />
>>>>>>> 25126a7151ac24f4c1ce706f9266aaefee877f91
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
