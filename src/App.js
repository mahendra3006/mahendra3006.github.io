import React, {Component} from 'react';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Social from "./components/Social";
import * as articleSelector from './store/articles/reducer';
import {connect} from 'react-redux';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {

    render() {
        const navItems = [
            {key: 1, value: "About Me", route: "/"},
            {key: 2, value: "Professional Experience", route: "/experience"},
            {key: 3, value: "Social", route: "/social"}
        ];
        return (
            <Router>
                <div className="article">
                    <Header headerText="Mahendra Singh"/>
                    <NavBar navItems={navItems}/>
                    <Switch>
                        <Route exact path="/" component={AboutMe}/>
                        <Route path="/experience" component={ProfessionalExperience}/>
                        <Route path="/social" component={Social}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: articleSelector.getArticles(state),
        selectedArticle: articleSelector.getSelectedArticle(state)
    }
};

export default connect(mapStateToProps)(App);