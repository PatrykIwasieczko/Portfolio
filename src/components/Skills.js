import React from "react";

const Skills = () => {
    const bestskills = [
        { icon: "js", text: "JavaScript ES6" },
        { icon: "react", text: "React" }
    ];
    const skills = [
        { icon: "html5", text: "HTML" },
        { icon: "css3", text: "CSS" },
        { icon: "sass", text: "Sass" },
        { icon: "git", text: "GIT" },
        { icon: "node", text: "NodeJS" },
        { icon: "python", text: "Python3" }
    ];
    const learningskills = [
        { icon: "robot", text: "Machine learning" },
        { icon: "server", text: "Django" }
    ];
    return (
        <div className="skills-container container">
            <h1>My skills</h1>
            <p className="intro">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum{" "}
            </p>
            <h2 className="heading">I feel the best at</h2>
            <ul className="skills">
                {bestskills.map((skill, index) => (
                    <li key={index}>
                        <i className={`fab fa-${skill.icon} fa-4x`}></i>
                        <p>{skill.text}</p>
                    </li>
                ))}
            </ul>
            <h2 className="heading">Technologies I use</h2>
            <ul className="skills">
                {skills.map((skill, index) => (
                    <li key={index}>
                        <i className={`fab fa-${skill.icon} fa-4x`}></i>
                        <p>{skill.text}</p>
                    </li>
                ))}
                <li>
                    <i className="fas fa-database fa-4x"></i>
                    <p>MongoDB</p>
                </li>
            </ul>
            <h2 className="heading">Learning</h2>
            <ul className="skills">
                {learningskills.map((skill, index) => (
                    <li key={index}>
                        <i className={`fas fa-${skill.icon} fa-4x`}></i>
                        <p>{skill.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
