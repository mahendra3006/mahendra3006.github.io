import React, {Component} from 'react';
import LandingPage from "./components/LandingPage";
import * as articleSelector from './store/articles/reducer';
import {connect} from 'react-redux';
import './App.css';
import {
    BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <Router>
                <LandingPage></LandingPage>
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