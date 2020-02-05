import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Projects extends Component {
    state = {
        projects: [
            {
                id: 1,
                img: "/assets/image.jpg",
                title: "title",
                description: "description"
            },
            {
                id: 2,
                img: "/assets/image.jpg",
                title: "title",
                description: "desc"
            }
        ]
    };

    render() {
        return (
            <div className="container">
                <div className="projects-container">
                    {this.state.projects.map(project => (
                        <div key={project.id} className="project">
                            <img src={project.img} alt="" />
                            <h2 className="title">{project.title}</h2>
                            <div className="description">
                                {project.description}
                            </div>
                            <NavLink to={`/projects/${project.id}`}>
                                View project
                                <i className="fas fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;
