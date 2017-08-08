import React from "react";
import { Col } from "react-bootstrap";


class RaceMid extends React.Component {
    render() {
        return (
            <Col md={4} className="spotlight">
                <img className="img-responsive" alt="" src={this.props.bike.pic}/>
                <h3>{this.props.bike.make} | {this.props.bike.model}</h3>
                <h5>${this.props.bike.msrp} | {this.props.bike.cc}cc | {this.props.bike.engine}</h5>
                <a href={this.props.bike.link}><h7>More...</h7></a>
            </Col>
        )
    }
}

export default RaceMid;