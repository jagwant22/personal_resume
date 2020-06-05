import React, {Component} from 'react';
import '../../../assets/css/logoline.css';
export default class LogoLine extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const propWidth = this.props.width;
        const dataObject = this.props.imgs;
        return(
            <div class='logo_line'>
                {Object.keys(this.props.imgs).map(function(name, index){
                    return <li className='logo_item'>
                            <a href={dataObject[name]} target="_blank">
                                <img className='logo_image' src={require('../../../assets/images/' + name+ ".svg")} style={{width:propWidth !== undefined ? propWidth : "50px"}}></img></a>
                        </li>
                })}
            </div>
        );
    }
}