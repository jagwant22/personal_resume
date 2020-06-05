import React, {Component} from 'react';


export default class Footer extends Component{
    
    render(){
        const footerStyle = {
            textAlign:"center",
            position : "relative",
            bottom:0,
            color:"white"
        };
        return(
            <div className ="footer_main" style={{footerStyle}}>
                <span>Designed and developed by Jagwant Sehgal</span>
            </div>
        );
    }
}