import React, {Component} from 'react';
import home_image from '../../../assets/images/home-image.jpg';
import '../../../assets/css/userimage.css';
export default class UserImage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='user_image_holder'>
                <div className="image_container">
                <img src={home_image} class='rounded bordered img-hover-zoom'></img>
                </div>
                
            </div>
        );
    }
}