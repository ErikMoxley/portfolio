import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/nav/Nav";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Contact} />
          <Route path="/contact" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
