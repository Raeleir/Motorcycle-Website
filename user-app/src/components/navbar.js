import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


class EncycloNavbar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">HOME</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li>
                            <Link to="/encyclopedia">ENCYCLOPEDIA</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/race">RACE</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">COMMUTE</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">NAKED</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">CRUISER</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">STANDARD</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">TOURER</Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default EncycloNavbar;