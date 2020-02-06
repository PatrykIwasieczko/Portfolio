import React, { Component } from "react";

class SpaceX extends Component {
    render() {
        return (
            <div className="container single-project">
                <h1 className="title">SpaceX Launches</h1>
                <p>
                    SpaceX launches is a project I put together after learning
                    the basics of GraphQL. This application was the perfect way
                    to improve my understanding of making queries and managing
                    larger sets of data. In this project, I utilized SpaceX API
                    to gather the data about company's space missions.
                </p>
                <div className="table">
                    <div>
                        <h2>Stack</h2>
                        <p>React</p>
                        <p>GraphQL</p>
                    </div>
                    <div>
                        <h2>Code</h2>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/PatrykIwasieczko/SpaceX-launches"
                            className="underlined-link"
                        >
                            Repository
                        </a>
                    </div>
                    <div>
                        <h2>Live</h2>
                        <a href="#" className="underlined-link">
                            Coming soon
                        </a>
                    </div>
                </div>
                <img src="/assets/image.jpg" alt="" />
                <div className="goal">
                    <h1>Project goal</h1>
                    <p>
                        As the main purpose of this project was to improve my
                        comprehension of GraphQL and APIs in general. Besides
                        this, I also wanted to make an application containing
                        interesting informations to the users fond of
                        technology.
                    </p>
                </div>
                <div className="layout">
                    <div className="left">
                        <ul>
                            <li>React</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h2 className="web-stack">Web stack</h2>
                        <p>
                            For this project I used React because of its ease of
                            use and the ability to smoothly manipulate states
                            without having to re-render the pages.
                        </p>
                        <p>
                            GraphQL was mainly chosen because I wanted to
                            improve my abilities with it, but also because their
                            server performance is extremely fast, and I knew
                            there wouldn't be any wait time.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpaceX;
