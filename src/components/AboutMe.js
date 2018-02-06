import React, {Component} from 'react';
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <h3 className="center-align">About Me</h3>
                <p>I am a Software Engineer based out of Bangalore, India,having keen interest in Frontend
                    Technologies.I have
                    experience in React JS, Angular JS, Jquery, Javascript, HTML, CSS. I speak fluent English,Hindi and
                    few other
                    local
                    Indian languages. I have an Engineering Degree in Computer Science and 5 years of professional
                    experience. I
                    love Javascript and love to explore the host of libraries and frameworks available for the language.
                </p>
                <div className="center-align">
                    <Carousel>
                        <CarouselItem>
                            <span>HTML 5</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>Javascript</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>CSS</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>React JS</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>Angular JS</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>Node JS</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>Java</span>
                        </CarouselItem>
                        <CarouselItem>
                            <span>SAP UI5</span>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        )
    }
}