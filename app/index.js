'use strict';

const ReactDOM = require('react-dom');

import {Routes} from './routes';

function getResumePath() {
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return '/dist/resume.json';
    }
    return '/dist/resume.example.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        work: 'Work',
        education: 'Education',
        skill: 'Skills',
        portfolio: 'Portfolio'
    };
}

ReactDOM.render(
    Routes.get({
        resumePath: getResumePath(),
        navigation: getNavigation()
    }),
    document.getElementById('app')
);
