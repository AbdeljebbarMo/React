import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../Context';

class Contacts extends Component {
    // Use dispatch to update state through the reducer
    deletContact = (dispatch, id) => {
        dispatch({
            type: 'delete-contact',
            payload: id
        });
    };

    render() {
        return (
            <Consumer>
                {value => (
                    <div>
                        {value.Contacts.map(el => (
                            <Contact
                                key={el.id}
                                data={el}
                                deletContactFrom={() => this.deletContact(value.dispatch, el.id)}
                            />
                        ))}
                    </div>
                )}
            </Consumer>
        );
    }
}

export default Contacts;
