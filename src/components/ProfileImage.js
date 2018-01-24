import React, {Component} from 'react';
import profileImage from './profile-image.jpg';

export default class ProfileImage extends Component{
    render(){
        return (
            <div>
                <img className="img-rounded" alt="logo" src={profileImage}/>
            </div>
        )
    }
}