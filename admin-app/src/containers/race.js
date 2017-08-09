import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import * as actionCreators from "../actions/";
import BikeList from "../components/bike-list";
import EncycloNavbar from "../components/navbar";
import FormContainer from "./form-container";



class Race extends React.Component {
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

                <FormContainer/>

                <div className="zero">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>Middleweight</h2>
                                <h4>Engine Size 600cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <BikeList handleUpdate={this.props.updateData} handleDelete={this.props.deleteData}
                                bikes={this.props.bikes.filter((bike) => {
                                    return bike.category === "race mid";
                                })}
                            />
                        </Row>
                    </Grid>
                </div>

                <div className="one">
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h2>Literbike</h2>
                                <h4>Engine Size 1000cc+</h4>
                            </Col>
                        </Row>
                        <hr className="half-rule"/>
                        <Row>
                            <BikeList handleUpdate={this.props.updateData} handleDelete={this.props.deleteData}
                               bikes={this.props.bikes.filter((bike) => {
                                   return bike.category === "race liter";
                                })}
                            />
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

export default connect(mapStateToProps, actionCreators)(Race);