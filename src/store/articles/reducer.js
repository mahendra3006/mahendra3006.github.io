import * as actions from './actionTypes';
import Immuatable from 'seamless-immutable';

const InitialState = new Immuatable({
    articles:{
    1: {
        header: "About Me",
        text: "I am a Software Engineer based out of Bangalore, India.I have keen interest in Frontend Technologies.I have experience in Angular JS, Jquery, Javascript, HTML, CSS. I speak fluent English,Hindi and few other local Indian languages. I have an Engineering Degree in Computer Science and 3 years of professional experience. I love Javascript and love to explore the host of libraries and frameworks available for the language."
    },
    2: {
        header: "Professional Experience",
        text: "Pro exp Engineer based out of Bangalore, India.I have keen interest in Frontend Technologies.I have experience in Angular JS, Jquery, Javascript, HTML, CSS. I speak fluent English,Hindi and few other local Indian languages. I have an Engineering Degree in Computer Science and 3 years of professional experience. I love Javascript and love to explore the host of libraries and frameworks available for the language."
    },
    3: {
        header: "Social",
        text: "Social I am a Software Engineer based out of Bangalore, India.I have keen interest in Frontend Technologies.I have experience in Angular JS, Jquery, Javascript, HTML, CSS. I speak fluent English,Hindi and few other local Indian languages. I have an Engineering Degree in Computer Science and 3 years of professional experience. I love Javascript and love to explore the host of libraries and frameworks available for the language."
    }},
    selectedArticle: {
        key: 1
    }
});

export default function reduce(state = InitialState, action = {}) {
    switch (action.type) {
        case actions.ADD_ARTICLE: {
            return state;
        }
        case actions.SELECT_ARTICLE: {
            return state.merge({
                selectedArticle: action.item
            });
        }
        default:{
            return state;
        }
    }
}

export function getArticles(state) {
    return state.articles;
}

export function getSelectedArticle(state) {
    return state.articles.articles[state.articles.selectedArticle.key];
}