import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
            <div className="wrapper" style={{backgroundImage: "url('http://iness.ucoz.net/_ph/14/470178191.jpg')"}}>
                <div className="overlay">
                    <header>
                        <Navbar collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <Link to="/">Joseph</Link>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <li>
                                        <Link to="/encyclopedia">Encyclopedia</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Learning</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Maintenance</Link>
                                    </li>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                    <section>
                        <h2>Placeholder Name</h2>
                        <p>A Motorcycle Resource</p>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;