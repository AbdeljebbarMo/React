import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'ABDELJEBBAR MO',
        email: 'ABDELJEBBAR@gmail.com',
        phone: '98565436715'
      },
      {
        id: 2,
        name: 'BASMA SALMI',
        email: 'basma@gmail.com',
        phone: '886543284321'
      },
      {
        id: 3,
        name: 'MOHAMMED SALHI',
        email: 'mohammed@gmail.com',
        phone: '1209432769327'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
