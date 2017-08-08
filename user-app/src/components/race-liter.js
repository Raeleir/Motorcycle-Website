import React from "react";


class RaceLiter extends React.Component {
    render() {
        return (
            <div>
                <img alt="" src={this.props.bike.pic}/>
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

export default RaceLiter;