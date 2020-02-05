// React
import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SingleProject from "./components/SingleProject";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route exact path="/projects/:id" component={SingleProject} />
        </BrowserRouter>
    );
}

export default App;
