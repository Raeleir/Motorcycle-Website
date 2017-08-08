import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li>
                            <Link to="/encyclopedia">Encyclopedia</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/race">Race</Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CustomNavbar;