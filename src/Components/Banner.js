import React, {Component} from 'react';
import '../assets/css/banner.css';
export default class Banner extends Component{

    navigateToTop(e) {
        e.preventDefault();
        window.scrollTo(0,0);
    }

    downloadResume(e){
        e.preventDefault();
        window.location="/assets/misc/resume/resume.pdf";
    }
    render() {
        return(
            <div className="banner_main">
                <span id='heading'><a href="/">J</a></span>
                <ul className="banner_items">
                    {/* <li><a href="#" onClick={this.navigateToTop}>Resume</a></li> */}
                    {/* <li>Projects</li> */}
                    {/* <li>Contact</li> */}
                    <span className='button bordered default' onClick={this.downloadResume}>Download Resume</span>
                </ul>
            </div>
        );
    }


}