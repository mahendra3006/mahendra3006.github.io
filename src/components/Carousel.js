import React, {Component} from 'react';

export default class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    render() {
        return (
            <div className="carousel">
                <div><input className="nav-button flex-grow-1" type="button" value="<" onClick={this.onPreviousClick.bind(this)}/></div>
                <div className="flex-grow-2">{this.props.children[this.state.currentIndex]}</div>
                <div><input className="nav-button flex-grow-1" type="button" value=">" onClick={this.onNextClick.bind(this)}/></div>
            </div>
        )
    }

    onPreviousClick() {
        if(this.state.currentIndex > 0){
            this.setState(state => {
                state.currentIndex--;
                return state;
            });
        }
    }

    onNextClick() {
        if(this.state.currentIndex < this.props.children.length -1){
            this.setState(state => {
                state.currentIndex++;
                return state;
            });
        }
    }

}