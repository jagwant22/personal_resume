import React, {Component} from 'react';
import UserImage from './UserImage';
import '../../../assets/css/about.css';

export default class About extends Component{
    render(){
        const indexStyle = {
            display:"inline",
            color:"white"
        }
        return(
            <div className="about" id="resume">
                <span style={{indexStyle}}> 01. </span><h3 style={{display:"inline"}}>About Me <span className="blinking">. . .</span> </h3> 
                <div className="about_divide">
                    <div className="about_content">
                        <p>
                            Hello, I am Jagwant Sehgal, a Computer Science gradudate student @ Rochester Institute of Technology, Rochester, NY.
                        I am passionate about Web Architecture and Development, Backend Engineering, and Machine Learning. I possess
                        Over 2 years of professional experience in application architure, development and deployement.
                        I joined RIT in the Fall '19 and am scheduled to graduate in 2021.
                        </p>
                    </div>
                    <div className="about_sep"></div>
                    <div className="about_pic">
                        <UserImage />
                    </div>
                    </div>
            </div>
        );
    }
}