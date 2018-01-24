import React, {Component} from 'react';
import ProfileImage from './ProfileImage';

export default class Header extends Component {
    render() {
        return (
            <div className="profile">
                <ProfileImage/>
                <h1>{this.props.headerText}</h1>
            </div>
        )
    }
}