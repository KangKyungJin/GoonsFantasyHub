import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {navigate} from '@reach/router';

const NavBar = props => {
    return (
        <Navbar style={{backgroundColor: '#282828'}}>
            <Navbar.Brand style={{color: "white"}} onClick={() => navigate('/')}>
                GoonSquad
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown className="ml-auto" title="Year">
                    <NavDropdown.Item onSelect={() => navigate(`/standings/2020`)} >2020</NavDropdown.Item>
                    <NavDropdown.Item onSelect={() => navigate(`/standings/2019`)} >2019</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate('/create')}>Create</Nav.Link>
                <Nav.Link onClick={() => navigate('/update')}>Update</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;