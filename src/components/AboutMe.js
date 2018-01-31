import React, {Component} from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <h3 className="center-align">About Me</h3>
                <p>I am a Software Engineer based out of Bangalore, India,having keen interest in Frontend
                    Technologies.I have
                    experience in React JS, Angular JS, Jquery, Javascript, HTML, CSS. I speak fluent English,Hindi and few other
                    local
                    Indian languages. I have an Engineering Degree in Computer Science and 5 years of professional
                    experience. I
                    love Javascript and love to explore the host of libraries and frameworks available for the language.
                </p>
                <div className="tech-cards">
                    <ul>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>React JS</li>
                        <li>Angular JS</li>
                        <li>Node JS</li>
                        <li>Java</li>
                        <li>SAP UI5</li>
                    </ul>
                </div>
            </div>
        )
    }
}