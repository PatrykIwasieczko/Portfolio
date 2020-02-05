import React, { Component } from "react";

class SingleProject extends Component {
    state = {
        projects: [
            {
                id: 1,
                title: "title1",
                stack: [],
                links: ["/projects", "/"],
                description: "lorem ipsum lorem ipsum lorem ipsum",
                images: []
            },
            {
                id: 2,
                title: "title2",
                stack: [],
                links: [],
                description: "",
                images: []
            }
        ],
        stack: [],
        links: [],
        title: "",
        description: "",
        images: []
    };
    componentDidMount() {
        const projectId = parseInt(this.props.match.params.id);
        let currentPost = this.state.projects.filter(project => {
            return project.id === projectId;
        });
        currentPost = currentPost[0];
        this.setState({
            title: currentPost.title,
            stack: currentPost.stack,
            links: currentPost.links,
            description: currentPost.description,
            images: currentPost.images
        });
    }

    render() {
        return (
            <div className="container single-project">
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <div>
                    <p>{this.state.links[0]}</p>
                    <p>{this.state.links[1]}</p>
                </div>
            </div>
        );
    }
}

export default SingleProject;
