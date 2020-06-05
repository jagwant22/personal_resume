import React, {Component} from 'react';
import '../assets/css/banner.css';
export default class Banner extends Component{

    render() {
        return(
            <div className="banner_main">
                <span id='heading'><a href="/">J</a></span>
                <ul className="banner_items">
                    <li><a href="#resume">Resume</a></li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <span className='button bordered default'>Download Resume</span>
                </ul>
            </div>
        );
    }


}