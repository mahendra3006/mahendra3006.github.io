import React, {Component} from 'react';

export default class CarouselItem extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}