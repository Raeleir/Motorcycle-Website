import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import EncycloNavbar from "./navbar";



class Encyclopedia extends React.Component {
    render() {
        return (
            <div>

                <div className="wrapper" style={
                    {backgroundImage: "url('https://lh3.googleusercontent.com/mhlZ-OarTHLwoTaBGdwRZOLBJPO1vyQn6V8qmVeK0uHB1fcMs7bb9BVUVOG9KmFWmw=h900')"}
                }>
                    <div className="overlay">
                        <EncycloNavbar/>
                        <section>
                            <h1>Encyclopedia</h1>
                            <hr className="half-rule-narrow"/>
                            <h3>Categorizing Our Two-Wheeled Steeds</h3>
                        </section>
                    </div>
                </div>


                <div className="zero">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>SPORTBIKES</h2>
                                <p>
                                    Engine engine rider RPM RPM wheel motorcycle racing rider. Wheel motorcycle wheel
                                    rider, exhaust racing motorcycle vehicle engine vehicle RPM racing vehicle. Racing
                                    wheel wheel rider motorcycle motorcycle racing. Wheel motorcycle vehicle engine engine
                                    fuel, rider rider racing exhaust engine. Fuel exhaust RPM exhaust, RPM wheel rider RPM
                                    exhaust cc.
                                </p>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <Col md={4}>
                                <Link to="/encyclopedia/race">
                                    <img className="img-responsive image" alt=""
                                         src="https://www.revzilla.com/blog_content_image/image/12024/15SPBK_R1_A3_032_1.jpg"
                                    />
                                </Link>
                                <h3>Race Replica</h3>
                                <p>
                                    Take a professional race machine, add street legal necessities like lights and mirrors,
                                    and you get a Race Replica. For those committed to track racing events and aggressive
                                    canyon riding.
                                </p>
                            </Col>
                            <Col md={4}>
                                <Link to="/encyclopedia/race">
                                    <img className="img-responsive image" alt=""
                                         src="http://bikeadvice.in/wp-content/uploads/2016/11/Honda-CBR-650F-images-4.jpg"
                                    />
                                </Link>
                                <h3>Commuter</h3>
                                <p>
                                    A sub-class of Sport, these are geared toward commuting and mild canyon riding. Some
                                    of the priorities in this class are value, mpg, comfort, and 'useable' power.
                                </p>
                            </Col>
                            <Col md={4}>
                                <Link to="/encyclopedia/race">
                                    <img className="img-responsive image" alt=""
                                         src="http://images.motorcycle-usa.com/PhotoGallerys/Ducati-Monster-821-4.jpg"
                                    />
                                </Link>
                                <h3>Naked</h3>
                                <p>
                                    Fuel rider RPM rider rider vehicle rider motorcycle. Cc vehicle vehicle cc motorcycle
                                    fuel engine. Motorcycle fuel racing cc exhaust rider, exhaust racing exhaust fuel engine.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>


                <div className="one">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>CLASSICS</h2>
                                <p>
                                    Engine engine rider RPM RPM wheel motorcycle racing rider. Wheel motorcycle wheel
                                    rider, exhaust racing motorcycle vehicle engine vehicle RPM racing vehicle. Racing
                                    wheel wheel rider motorcycle motorcycle racing. Wheel motorcycle vehicle engine engine
                                    fuel, rider rider racing exhaust engine. Fuel exhaust RPM exhaust, RPM wheel rider RPM
                                    exhaust cc.
                                </p>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <Col md={4}>
                                <Link to="/encyclopedia/race">
                                    <img className="img-responsive image" alt=""
                                         src="https://www.revzilla.com/blog_content_image/image/12024/15SPBK_R1_A3_032_1.jpg"
                                    />
                                </Link>
                                <h3>Race Replica</h3>
                                <p>
                                    Take a professional race machine, add street legal necessities like lights and mirrors,
                                    and you get a Race Replica. For those committed to track racing events and aggressive
                                    canyon riding.
                                </p>
                            </Col>
                            <Col md={4}>
                                <Link to="/encyclopedia/race">
                                    <img className="img-responsive image" alt=""
                                         src="http://bikeadvice.in/wp-content/uploads/2016/11/Honda-CBR-650F-images-4.jpg"
                                    />
                                </Link>
                                <h3>Commuter</h3>
                                <p>
                                    A sub-class of Sport, these are geared toward commuting and mild canyon riding. Some
                                    of the priorities in this class are value, mpg, comfort, and 'useable' power.
                                </p>
                            </Col>
                            <Col md={4}>
                                <Link to="/encyclopedia/race">
                                    <img className="img-responsive image" alt=""
                                         src="http://images.motorcycle-usa.com/PhotoGallerys/Ducati-Monster-821-4.jpg"
                                    />
                                </Link>
                                <h3>Naked</h3>
                                <p>
                                    Fuel rider RPM rider rider vehicle rider motorcycle. Cc vehicle vehicle cc motorcycle
                                    fuel engine. Motorcycle fuel racing cc exhaust rider, exhaust racing exhaust fuel engine.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>


            </div>
        )
    }
}

export default Encyclopedia;