import React, { Component } from 'react';
import { Consumer } from '../Context';
import InputGroup from '../Helper/InputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        tele: ''
    }

    onchangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


res ={
    name : this.state.name,
    email : this.state.email,
    tele : this.state.tele,
}
    Submit = (dispatch,e) => {
        e.preventDefault();
        
     const newContact ={
            name : this.state.name,
            email : this.state.email,
            tele : this.state.tele,
        }
        axios.post('https://jsonplaceholder.typicode.com/users',newContact)
        .then(res=>
            dispatch({
                type :'Add-contact',
                payload :res.data 
            })
            )
        .catch(err=>(console.error(err)))
       
        
    }
    render() {
        
        const { name, email, tele } = this.state;
        return (
            <Consumer>
            {(value)=>{
                const {dispatch}=value;
                return (
                <form onSubmit={this.Submit.bind(this,dispatch, value.Contacts.length)}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <div className="card-text">
                                <InputGroup
                                name='name'
                                type='text'
                                val={name}
                                onchange={this.onchangeInput}
                                nam='name' 
                                />
                                <InputGroup
                                name='email'
                                type='email'
                                val={email}
                                onchange={this.onchangeInput}
                                nam='email' 
                                />
                                <InputGroup
                                name='tele'
                                type='text'
                                val={tele}
                                onchange={this.onchangeInput}
                                nam='tele' 
                                />
                                <button className="btn btn-success btn-block">AddContact</button>
                            </div>
                        </div>
                    </div>
                </form>
                );
            } }
            </Consumer>
        )
    }
}

export default AddContact;
