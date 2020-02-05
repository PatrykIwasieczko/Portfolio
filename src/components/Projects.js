import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
    const projects = [
        {
            img: "/assets/image.jpg",
            title: "title",
            description: "description",
            link: "/projects"
        },
        {
            img: "/assets/image.jpg",
            title: "title",
            description: "desc",
            link: "/projects"
        }
    ];

    return (
        <div className="container">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.img} alt="" />
                        <h2 className="title">{project.title}</h2>
                        <div className="description">{project.description}</div>
                        <NavLink to={project.link}>
                            View project
                            <i className="fas fa-arrow-right"></i>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
