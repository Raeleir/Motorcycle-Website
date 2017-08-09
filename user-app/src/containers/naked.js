import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import * as actionCreators from "../actions/";
import BikeList from "../components/bike-list";
import EncycloNavbar from "../components/navbar";


class Naked extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <div className="wrapper" style={
                    {backgroundImage: "url('https://i.ytimg.com/vi/ko1VvxNXoAw/maxresdefault.jpg')"}
                }>
                    <div className="overlay">
                        <EncycloNavbar/>
                        <section>
                            <h1>Naked</h1>
                            <hr className="half-rule"/>
                            <h3 className="sub-heading">Commuter Motorcycles, Made Without Fairings for Style and/or Price</h3>
                        </section>
                    </div>
                </div>

                <div className="zero">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>Entry Level</h2>
                                <h4>Engine Size 250cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <BikeList bikes={this.props.bikes.filter((bike) => {
                                return bike.category === "naked entry";
                            })}/>
                        </Row>
                    </Grid>
                </div>

                <div className="one">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>Middleweight</h2>
                                <h4>Engine Size 600cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <BikeList bikes={this.props.bikes.filter((bike) => {
                                return bike.category === "naked mid";
                            })}/>
                        </Row>
                    </Grid>
                </div>

                <div className="zero">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>Literbike</h2>
                                <h4>Engine Size 1000cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <BikeList bikes={this.props.bikes.filter((bike) => {
                                return bike.category === "naked liter";
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

export default connect(mapStateToProps, actionCreators)(Naked);