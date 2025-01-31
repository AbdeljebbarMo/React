import React, { Component } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Routes>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
