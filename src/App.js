import React, {Component} from 'react';
import LandingPage from "./containers/LandingPage";
import AboutMe from "./containers/AboutMe";
import * as articleSelector from './store/articles/reducer';
import {connect} from 'react-redux';
import './App.css';
import WorkExperience from "./containers/WorkExperience";
import Social from "./containers/Social";


class App extends Component {

    render() {
        return (
            <div className="float-left">
                <LandingPage scrollToSocial={this.scrollToSocial.bind(this)}></LandingPage>
                <AboutMe/>
                <WorkExperience/>
                <div ref={(el)=>{this.SocialRef=el}}>
                    <Social/>
                </div>
            </div>
        )
    }

    scrollToSocial(){
        //scroll
        this.SocialRef.scrollIntoView({behavior:"smooth"});
    }
}

const mapStateToProps = (state) => {
    return {
        articles: articleSelector.getArticles(state),
        selectedArticle: articleSelector.getSelectedArticle(state)
    }
};

export default connect(mapStateToProps)(App);