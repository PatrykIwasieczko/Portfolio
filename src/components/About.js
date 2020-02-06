import React from "react";

const About = () => {
    return (
        <div className="container about">
            <h1 className="title">
                Hello there! I am Patryk. Frontend Developer
            </h1>
            <p>something</p>
            <h2>
                Feel free to reach out if you're looking for a developer or have
                a question.
            </h2>
            <div className="links">
                <a
                    className="underlined-link"
                    href="mailto:patryk.iwasieczko@gmail.com"
                >
                    patryk.iwasieczko@gmail.com
                </a>
                <a
                    className="underlined-link"
                    href="https://www.linkedin.com/in/patryk-iwasieczko-7a997b137/"
                >
                    Linkedin
                </a>

                <a
                    className="underlined-link"
                    href="https://github.com/PatrykIwasieczko"
                >
                    Github
                </a>
            </div>
        </div>
    );
};

export default About;
