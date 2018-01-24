import React,{Component} from 'react';

export default class Article extends Component{
    render(){
        return(
            <article>
                <h3>{this.props.header}</h3>
            </article>
        )
    }
}