import React, {Component} from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Experience from './Experience';
import LogoLine from './Microcomponents/Home/LogoLine';
import Social from './Microcomponents/Home/Social';
import '../assets/css/home.css';
import About from './Microcomponents/Home/About';

import { educationDetails, experienceDetails } from './details';
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nvBgColor : null
        }
    }
    render() {
        return (
            <div className='container'>
                <Banner bgcolor={this.state.nvBgColor}/>
                <div id='content-container'>
                    {/* <UserImage height="300px" width="300px"/> */}
                    <span className='intro_hello'>
                        Hi, my name is 
                    </span>
                    <div>
                        <span className="name">
                            Jagwant Sehgal
                        </span>
                    </div>
                    <div>
                        <span className='who_am_i_desc'>
                            I design. I architect. I build. I conquer <span className='blinking'>_</span>
                        </span>
                    </div>
                    <LogoLine imgs={
                        {
                            "python":"http://www.python.org", 
                            "django":"https://www.djangoproject.com",
                            "java": "https://www.java.com",
                            "js":"https://www.javascript.com"
                        }
                    } />
                    
                    <LogoLine imgs={
                        {"aws" : "https://aws.amazon.com", 
                        "gcp":"https://cloud.google.com", 
                        "docker":"https://www.docker.com", 
                        "react":"http://reactjs.org"
                    }}/>
                    <LogoLine width="100px"
                     imgs={
                        {"mysql" : "https://mysql.com",
                        "mongodb":"https://mongodb.org" 
                        
                    }}/>
                    
                    {/* <LogoLine width="100px" imgs={["mysql", "mongodb"]}/>  */}
                </div>
                <About />
                <Experience title="Experience " details={experienceDetails} />
                {/* <Social /> */}
                <Experience title="Education" details={educationDetails}/>
                
                <Footer />
            </div>
        ) ;

    }
}