import React from "react";


class Sport extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.sport.pic}/>
                <ul>
                    <li>{this.props.sport.make}</li>
                    <li>{this.props.sport.model}</li>
                    <li>{this.props.sport.msrp}</li>
                    <li>{this.props.sport.cc}</li>
                    <li>{this.props.sport.engine}</li>
                </ul>
            </div>
        )
    }
}

export default Sport;