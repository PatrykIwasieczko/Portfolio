import React, { Component } from "react";

class Writer {
    constructor(textElement, words, wait) {
        this.textElement = textElement;
        this.words = words;
        this.text = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullText = this.words[current];

        this.isDeleting
            ? (this.text = fullText.substring(0, this.text.length - 1))
            : (this.text = fullText.substring(0, this.text.length + 1));

        this.textElement.innerHTML = `<span class="text">${this.text}</span>`;

        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.text === fullText) {
            typeSpeed = this.wait;

            this.isDeleting = true;
        } else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

class Main extends Component {
    componentDidMount() {
        this.initialize();
    }

    initialize = () => {
        const textElement = document.querySelector(".text-type");
        const words = ["Developer", "Engineer", "Designer"];
        const wait = 2000;
        new Writer(textElement, words, wait);
    };

    render() {
        return (
            <div className="main-container">
                <div className="main-content">
                    <h1>
                        Patryk Iwasieczko The
                        <span className="text-type"></span>
                    </h1>
                    <h2>Welcome To My Portfolio</h2>
                    <div className="icons">
                        <a href="#!">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="#!">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="#!">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
