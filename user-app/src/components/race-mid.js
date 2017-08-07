import React from "react";


class RaceMid extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.bike.pic}/>
                <ul>
                    <li>{this.props.bike.make}</li>
                    <li>{this.props.bike.model}</li>
                    <li>{this.props.bike.msrp}</li>
                    <li>{this.props.bike.cc}</li>
                    <li>{this.props.bike.engine}</li>
                </ul>
            </div>
        )
    }
}

export default RaceMid;