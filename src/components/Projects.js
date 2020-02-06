import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Projects extends Component {
    state = {
        projects: [
            {
                id: "blog",
                img: "/assets/image.jpg",
                title: "Blog",
                description:
                    "Blog about healthy life created with MERN stack (MongoDB, Express, React and NodeJS)."
            },
            {
                id: "spaceX",
                img: "/assets/image.jpg",
                title: "SpaceX launches",
                description:
                    "App displaying data about SpaceX missions into space."
            }
        ]
    };

    render() {
        return (
            <div className="container projects-list">
                <div className="projects-container">
                    {this.state.projects.map(project => (
                        <div key={project.id} className="project">
                            <img src={project.img} alt="" />
                            <h2 className="title">{project.title}</h2>

                            <p className="description">{project.description}</p>

                            <NavLink to={`/projects/${project.id}`}>
                                View project
                                <i className="fas fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="button">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/PatrykIwasieczko"
                        className="btn"
                    >
                        Check more projects on my github
                    </a>
                </div>
            </div>
        );
    }
}

export default Projects;
