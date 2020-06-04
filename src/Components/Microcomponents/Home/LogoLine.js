import React, {Component} from 'react';
import '../../../assets/css/logoline.css';
export default class LogoLine extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div class='logo_line'>
                {this.props.imgs.map(function(name, index){
                    return <li className='logo_item'><img className='logo_image' src={require('../../../assets/images/' + name+ ".svg")}></img></li>
                })}
            </div>
        );
    }
}