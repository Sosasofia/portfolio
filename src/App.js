import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

import GlobalStyle from "./styles/GlobalStyle";
import Footer from "components/Footer";
import Skills from "components/About/Skills";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <div className="App-header">
        <Navigation></Navigation>
      </div>

      <div className="App-content">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
