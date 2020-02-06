import React, { Component } from "react";

class Blog extends Component {
    render() {
        return (
            <div className="container single-project">
                <h1 className="title">Blog</h1>
                <p>
                    Blog is a React Application for people who want to stay fit
                    and healthy. I built this project from scratch with React,
                    Redux. I used Sass to create my mini-framework, which helped
                    me styling components quickly. Application was connected to
                    API created with NodeJS and noSQL database - MongoDB, where
                    all the necessary data were stored.
                </p>
                <div className="table">
                    <div>
                        <h2>Stack</h2>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Sass</p>
                        <p>NodeJS</p>
                        <p>MongoDB</p>
                    </div>
                    <div>
                        <h2>Code</h2>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/PatrykIwasieczko/blog-mern"
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
                        comprehension of React and NodeJS in general. Besides
                        this, I also wanted to create an application that would
                        reach the production and would become the source of
                        knowledge about healthy life.
                    </p>
                </div>
                <div className="layout">
                    <div className="left">
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Sass</li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h2 className="web-stack">Web stack</h2>
                        <p>
                            For this project I used React because of its ease of
                            use and the ability to smoothly manipulate states
                            without having to re-render the pages. Redux was a
                            necessary addition to the project because of its
                            ease of managing global state and passing data
                            between components.
                        </p>
                        <p>
                            NodeJS was mainly chosen because I wanted to improve
                            my abilities with it as well as its based on
                            JavaScript, in which I feel the best at. NodeJS is
                            highly compatible with Mongo so I implemented it as
                            database.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
