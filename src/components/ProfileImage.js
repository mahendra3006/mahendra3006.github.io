import React, {Component} from 'react';
import profileImage from '../images/profile-image.jpg';

export default class ProfileImage extends Component{
    render(){
        return (
            <div className="margin2 center-align">
                <img className="img-rounded" alt="logo" src={profileImage}/>
            </div>
        )
    }
}