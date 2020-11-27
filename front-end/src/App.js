import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './App.css';

import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="bod">
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        </div>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
