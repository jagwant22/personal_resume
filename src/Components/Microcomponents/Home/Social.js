import React, {Component} from 'react';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/git.png';
export default class Social extends Component {
    navigateToLinkedInProfile() {
        const win = window.open("https://www.linkedin.com/in/jagwant-sehgal/", "_blank")
        window.focus();
    }

    navigateToGithub() {
        const win_g = window.open("https://github.com/jagwant22", "_blank")
        window.focus();
    }
    render() {
        return(
            <div className="socialLinks">
                <img src={linkedin} style={style.socialElements} onClick={this.navigateToLinkedInProfile}/>
                <img src={github} style={style.socialElements} onClick={this.navigateToGithub}/>
            </div>
        );
    }
}
const style ={
    socialElements: {
        width:32,
        cursor:'pointer',
        marginLeft: "2vw",
        bottom:20
    }
}