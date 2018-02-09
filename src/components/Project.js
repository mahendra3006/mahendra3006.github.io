import React, {Component} from 'react';

export default class Project extends Component {
    render() {
        return (
                <div className={this.props.className}>
                        <h3>{this.props.header}</h3>
                        <span>Domain: {this.props.domain}</span>
                        {this.props.children}
                </div>
        )
    }
}
