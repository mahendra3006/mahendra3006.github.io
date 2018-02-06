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
            <div>
                <div className="disp-inln-bl"><input className="nav-button" type="button" value="<" onClick={this.onPreviousClick.bind(this)}/></div>
                <div className="disp-inln-bl tech-card">{this.props.children[this.state.currentIndex]}</div>
                <div className="disp-inln-bl"><input className="nav-button" type="button" value=">" onClick={this.onNextClick.bind(this)}/></div>
            </div>
        )
    }

    onPreviousClick() {
        if(this.state.currentIndex >= 0){
            this.setState(state => {
                state.currentIndex--;
                return state;
            });
        }
    }

    onNextClick() {
        if(this.state.currentIndex <= this.props.children.length){
            this.setState(state => {
                state.currentIndex++;
                return state;
            });
        }
    }

}