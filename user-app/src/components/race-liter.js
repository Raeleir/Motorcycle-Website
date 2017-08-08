import React from "react";
import { Col } from "react-bootstrap";


class RaceLiter extends React.Component {
    render() {
        return (
            <Col md={4}>
                <img className="img-responsive" alt="" src={this.props.bike.pic}/>
                <ul>
                    <li>{this.props.bike.make}</li>
                    <li>{this.props.bike.model}</li>
                    <li>{this.props.bike.msrp}</li>
                    <li>{this.props.bike.cc}</li>
                    <li>{this.props.bike.engine}</li>
                </ul>
            </Col>
        )
    }
}

export default RaceLiter;