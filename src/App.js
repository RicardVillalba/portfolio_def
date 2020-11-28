import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import Index from './pages/Index'
import SplashScreen from './pages/SplashScreen'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={SplashScreen} />
      <div className="App">
       <Sidebar />
       <Route path="/home" component={Index} />
      </div>
      </Switch>
      </BrowserRouter> 
    );
  }
}
export default App;


