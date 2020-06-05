import React, {Component} from 'react';
import Banner from './Banner';
import Footer from './Footer';
import LogoLine from './Microcomponents/Home/LogoLine';
import '../assets/css/home.css';
import About from './Microcomponents/Home/About';
export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Banner />
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
                <Footer />
            </div>
        ) ;

    }
}