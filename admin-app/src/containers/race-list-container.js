import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import * as actionCreators from "../actions/";
import RaceMidList from "../components/race-mid-list";
import RaceLiterList from "../components/race-liter-list";
import EncycloNavbar from "../components/navbar";



class RaceListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <div className="wrapper" style={
                    {backgroundImage: "url('http://geodavephotography.com/images/motogp-wallpaper/37783534-motogp-wallpaper.jpg')"}
                }>
                    <div className="overlay">
                        <EncycloNavbar/>
                        <section>
                            <h1>Race Replica</h1>
                            <hr className="half-rule-narrow"/>
                            <h3>Professional Race Machines, Made Street-Legal Production Motorcycles</h3>
                        </section>
                    </div>
                </div>

                <div className="zero">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>MIDDLEWEIGHT</h2>
                                <h4>Engine Size 600cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <RaceMidList raceMids={this.props.bikes.filter((bike) => {
                                return bike.category === "race mid";
                            })}/>
                        </Row>
                    </Grid>
                </div>

                <div className="one">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>LITERBIKE</h2>
                                <h4>Engine Size 1000cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <RaceLiterList raceLiters={this.props.bikes.filter((bike) => {
                                return bike.category === "race liter";
                            })} />
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(RaceListContainer);