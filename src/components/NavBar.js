import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
export default class NavBar extends Component {
    render() {
        return (
            <ul className="navbar">
                {this.props.navItems.map(this.renderRow.bind(this))}
            </ul>
        )
    }

    renderRow(item) {
        return (
            <li key={item.key}>
                <Link to={item.route}>
                    {item.value}
                </Link>
            </li>
        )
    }
}