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
import { ListPage } from "./pages/ListPage"
import { Home } from "./pages/Home"
// import { Signup } from "./pages/Signup"
import { Lookup } from "./pages/Lookup"
import 'font-awesome/css/font-awesome.min.css';
import { StoreProvider } from "./utils/GlobalState";



function App() {
  return (
    <div>
      <Router>
        <StoreProvider>
          <Switch>
            <Route path='/List/:codename'>
              <ListPage />
            </Route>
            <Route path='/Lookup'>
              <Lookup />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </StoreProvider>
        
        <Footer />
      </Router>


    </div>
  );
}

export default App;
