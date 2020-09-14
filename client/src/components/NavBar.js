import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {navigate} from '@reach/router';

const NavBar = props => {
    return (
        <Navbar style={{backgroundColor: '#2ada70'}}>
            <Navbar.Brand onClick={() => navigate('/')}>
                GoonSquad
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => navigate('/standings')}>Standings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;