import React, { Component } from "react";
import Navbar from "./components/nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/Global";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />

          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Home} />
            <About />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
