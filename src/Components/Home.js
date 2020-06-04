import React, {Component} from 'react';
import Banner from './Banner';

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
                    <LogoLine imgs={["python","django", "java", "js"]}/> 
                    <LogoLine imgs={["aws", "gcp", "docker"]}/> 
                </div>
                <About />
                
            </div>
        ) ;

    }
}