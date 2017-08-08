import React from "react";

import RaceMid from "../components/race-mid";


class RaceMidContainer extends React.Component {
    render() {
        return (
            <div>
                <RaceMid bike={this.props.bike} />
            </div>
        )
    }
}

export default RaceMidContainer;