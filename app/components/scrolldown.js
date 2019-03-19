'use strict';
import React from 'react';

class ScrollDown extends React.Component{
    render() {
        return (
            <p className='scrolldown'>
                <a className='smoothscroll' href='#about'>
                    <i className='icon-down-circle'/>
                </a>
            </p>
        );
    }
}

export default ScrollDown;
