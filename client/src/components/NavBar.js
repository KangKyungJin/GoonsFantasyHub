import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {navigate} from '@reach/router';

const NavBar = props => {
    return (
        <Navbar style={{backgroundColor: '#2ada70'}}>
            <Navbar.Brand onClick={() => navigate('/')}>
                GoonSquad
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown className="ml-auto" title="Year">
                    <NavDropdown.Item onSelect={() => navigate(`/standings/2020`)} >2020</NavDropdown.Item>
                    <NavDropdown.Item onSelect={() => navigate(`/standings/2019`)} >2019</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;