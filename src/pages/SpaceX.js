import React, { Component } from "react";

class SpaceX extends Component {
    state = {};

    render() {
        return (
            <div className="container single-project">
                <h1>Title</h1>
                <p>Description</p>
                <div className="table">
                    <div>
                        <p>Stack</p>
                        <p>tech</p>
                        <p>tech</p>
                        <p>tech</p>
                    </div>
                    <div>
                        <p>Code</p>
                        <a>code here</a>
                    </div>
                    <div>
                        <p>Live</p>
                        <a href="">code here</a>
                    </div>
                </div>
                <img src="/assets/image.jpg" alt="" />
                <h1>Project goal</h1>
                <p>Main purpose</p>
                <div className="left">
                    <ul>
                        <li>tech</li>
                        <li>tech</li>
                        <li>tech</li>
                    </ul>
                </div>
                <div className="right">
                    <h2>Web stack</h2>
                    <p></p>
                </div>
                <div>
                    <h2>Lessons learned</h2>
                    <p>my lessons</p>
                </div>
            </div>
        );
    }
}

export default SpaceX;
