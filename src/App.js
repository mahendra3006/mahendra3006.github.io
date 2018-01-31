import React, {Component} from 'react';
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import * as articleSelector from './store/articles/reducer';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="float-left">
                <LandingPage></LandingPage>
                <AboutMe/>
            </div>
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