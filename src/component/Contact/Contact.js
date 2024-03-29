import React, { Component } from 'react';
import {Consumer} from '../Context';
import axios from 'axios';
class Contact extends Component {
        state ={
            com : true
        }
ShowContact =(e)=>{
    console.log("salam" ,e)
    this.setState({com :!this.state.com})
}
ondeleteClick =(id , dispatch)=>{
    axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
    .then(res=>
        dispatch({
            type : 'delete-contact',
            payload :id    
        }))
    .catch(err=>console.error(err))
    
};
    render(){
        const {id,name,email,tele}=this.props.data;
        return(
            <Consumer>
            
            {(value) => {
                        const {dispatch}= value ;
                        return(
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{ name }
                        <i onClick={this.ShowContact.bind(this,name)} className=" fa fa-sort-down" style ={{cursor:'pointer'}}></i>
                        <i onClick={ this.ondeleteClick.bind(this,id, dispatch)} style={{color:'red', float:'right', cursor :'pointer'}} class="fa fa-times" aria-hidden="true"></i>
                        </h4>
                        <p className="card-text">
                            {this.state.com ? (
                                <ul className="list-group">
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item disabled">{tele}</li>
                                </ul>
                            ) : null}
                            
                        </p>
                    </div>
                </div>
                );
            }}
            </Consumer>
            );
    
       
    }



// Contact.defaultProps={
//     "name" : "salah",
//     "tele": "98897886",
//     "email" : "salah@gmail.com"
// }
}

export default Contact;
