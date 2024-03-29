import React, { Component } from 'react';
import axios from 'axios';
// Use React.createContext() to create a context
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'delete-contact':
            return {
                Contacts: state.Contacts.filter((el) => el.id !== action.payload)
            };
            case 'Add-contact':
            return {
                Contacts: [action.payload, ...state.Contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        Contacts: [
            { id: 1, name: 'abdeljabar', email: 'abdeljebbar@gmail.com', tele: 34567853 },
            { id: 2, name: 'salah', email: 'salah@gmail.com', tele: 3456785445 },
            { id: 3, name: 'ahmad', email: 'ahmad@gmail.com', tele: 3456785365535 }
        ],
        dispatch: (action) => this.setState((state) => reducer(state, action))
    };

    componentWillMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>this.setState({
            Contacts: res.data
        }))
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
