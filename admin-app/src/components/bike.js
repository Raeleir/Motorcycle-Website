import React from "react";
import { Col } from "react-bootstrap";


class Bike extends React.Component {
    render() {
        return (
            <Col md={4} className="spotlight">
                <div className="pics" style={{backgroundImage: `url(${this.props.bike.pic})`}}/>
                <input className="img-input" onChange={(event) => {
                        this.props.handleChange("pic", event);
                    }} placeholder="https://cdn.shopify.com/s/files/1/0333/0021/products/2017_HONDA_CBR1000RR_600x400_RedBlackWhite_trans_CENTRAL_FLORIDA_POWERSPORTS.png?v=1478626674" value={this.props.input.pic}
                />

                <h3>{this.props.bike.make} | {this.props.bike.model}</h3>
                <span>
                    <input onChange={(event) => {
                            this.props.handleChange("make", event);
                        }} placeholder="make" value={this.props.input.make}
                    />
                    <input onChange={(event) => {
                            this.props.handleChange("model", event);
                        }} placeholder="model" value={this.props.input.model}
                    />
                </span>

                <h5>${this.props.bike.msrp} | {this.props.bike.cc}cc | {this.props.bike.engine}</h5>
                <span>
                    <input onChange={(event) => {
                            this.props.handleChange("msrp", event);
                        }} placeholder="msrp" value={this.props.input.msrp}
                    />
                    <input onChange={(event) => {
                            this.props.handleChange("cc", event);
                        }} placeholder="cc" value={this.props.input.cc}
                    />
                    <input onChange={(event) => {
                            this.props.handleChange("engine", event);
                        }} placeholder="engine" value={this.props.input.engine}
                    />
                </span>

                <br/>

                <a href={this.props.bike.link}><h7>More...</h7></a>
                <br/>
                <input onChange={(event) => {
                        this.props.handleChange("link", event);
                    }} placeholder="link" value={this.props.input.link}
                />

                <br/>

                <button onClick={() => {
                    this.props.handleUpdate(this.props.bike._id, this.props.input);
                }}>Update</button>
                <button onClick={() => {
                    this.props.handleDelete(this.props.bike._id);
                }}>Delete</button>
            </Col>
        )
    }
}

export default Bike;