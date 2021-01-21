import React from "react";
import Home from "./component/Home";
import ReceipeDetails from "./component/ReceipeDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipe" component={ReceipeDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
