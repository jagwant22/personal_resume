import React, {Component} from 'react';
import Social from './Microcomponents/Home/Social';

export default class Footer extends Component{
    
    render(){
        const footerStyle = {
            textAlign:"center",
            position : "relative",
            bottom:0,
            color:"white",
            paddingTop:"25px",
            paddingBottom : "5px",
            borderTop: "1px solid"

        };
        return(
            <div style={footerStyle} className ="footer_main" >
                <Social />
            </div>
        );
    }
}