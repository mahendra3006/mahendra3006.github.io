import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProfileImage from "./ProfileImage";

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <ProfileImage/>
                <div className="intro center-align margin2">
                    Hi! I'm Mahendra Singh.I am a Front End Developer.
                </div>
                <input className="hire-me-btn button margin5" type="button" value="Hire Me!"/>
                <span className="margin2 center-align display-block color-black">Scroll down for more...</span>
            </div>
        )
    }
}