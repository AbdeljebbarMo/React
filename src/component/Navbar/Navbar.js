import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                    <Link class="navbar-brand" to="#">{this.props.tilte}</Link>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/contact">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/a">AddContact <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/About/:id/:name">Qbout <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/Test">test <span class="sr-only">(current)</span></Link>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
