
import {  Route, Switch } from "wouter";


import './App.css';

import Home from "./componentes/Home/Home"

import Loggin from "./componentes/Loggin/Loggin"

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Loggin" component={Loggin} />
      </Switch>

    </div>
  );
}


export default App;
