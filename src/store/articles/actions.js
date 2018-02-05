import * as actions from './actionTypes';

export function addArticle() {
    return {type: actions.ADD_ARTICLE};
}
export function setSelectedArticle(item) {
    return {type: actions.SELECT_ARTICLE, item};
}