import React from "react";
import autoBind from "react-autobind";

import Bike from "../components/bike";


class BikeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.bike
        };
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Bike input={this.state} handleChange={this.handleChange} handleUpdate={this.props.handleUpdate}
                         handleDelete={this.props.handleDelete} bike={this.props.bike}
                />
            </div>
        )
    }
}

export default BikeContainer;