// React
import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// Components
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

// Pages
import SpaceX from "./pages/SpaceX";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects/spacex" component={SpaceX} />
            <Redirect to="/" />
        </BrowserRouter>
    );
}

export default App;
