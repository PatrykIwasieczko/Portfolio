// React
import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route path="/projects" component={Projects} />
        </BrowserRouter>
    );
}

export default App;
