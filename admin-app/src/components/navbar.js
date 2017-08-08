import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


class EncycloNavbar extends React.Component {
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
                        <li>
                            <Link to="/encyclopedia/">Commute</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">Naked</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">Cruiser</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">Standard</Link>
                        </li>
                        <li>
                            <Link to="/encyclopedia/">Tourer</Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default EncycloNavbar;