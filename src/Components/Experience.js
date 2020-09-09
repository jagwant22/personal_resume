import React, {Component} from 'react';
import '../assets/css/experience.css';

export default class Experience extends Component{
    constructor(props){
        super(props);
        
        this.job_details = this.props.details;
            
            this.state = {
                active: undefined
            }
            
        
    }
    componentDidMount(){
        console.log("Setting active to " + this.job_details[0]);
        this.setState({
            active : this.job_details[Object.keys(this.job_details)[0]][0].id
        });
    }
    expSelected = (event, val) => {
        if(event.target !== undefined){
            this.setState({active : event.target.getAttribute("value")});
        }
        
    }


    render() {
        if(this.state.active != null ){
            return(
            
                <div className="experience">
                        <h3 style={{display:"inline"}}>{this.props.title}</h3> 
                        <div className="exp_item_holder">
                            <ul className="exp_items">
                                {Object.keys(this.job_details).map((key, index) => {
                                    if(this.job_details[key][0].id === this.state.active){
                                        return(<li key={index} className="exp_item active">
                                            <span value={this.job_details[key][0].id} onClick={() => this.expSelected(this.job_details[key][0].id)}>
                                                {this.job_details[key][0].full}
                                            </span> 
                                        </li>)
                                    }else{
                                        return (<li className="exp_item" key={index}>
                                            <span value={this.job_details[key][0].id} onClick={this.expSelected}>
                                                {this.job_details[key][0].full}
                                            </span> 
                                        </li>)
                                    }
                                    
                                }) }
                                
                            </ul>
    
                            <div className='exp_details'>
                                
                                {this.job_details[this.state.active].map((val, index)=> {
                                    return(<div className="det" key={index}>
                                        <span className="exp_desig exp_margin">{val.designation} <span className='exp_full'>{val.full}</span></span>
                                        <span className="start_date exp_margin">{val.start}</span>-
                                        <span className="end_date exp_margin">{val.end}</span>
                                        <span className="exp_loca exp_margin">{val.location}</span>
                                        <span className="exp_desc">{val.desc}</span>
                                        
                                    </div>);   
                                })}
                            </div>
                        </div>
                </div>
                            
            );
        }else{
            return (<div></div>);
        }
        
    }
}