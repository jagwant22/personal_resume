import React, {Component} from 'react';
import home_image from '../../../assets/images/home-image.jpg';
import '../../../assets/css/userimage.css';
export default class UserImage extends Component {
    
    render() {
        return(
            <div className='user_image_holder'>
                <div className="image_container">
                <img src={home_image} className='rounded bordered img-hover-zoom'></img>
                </div>
            </div>
        );
    }
}