import React from "react";

import RaceLiter from "../components/race-liter";


class RaceLiterContainer extends React.Component {
    render() {
        return (
            <div>
                <RaceLiter bike={this.props.bike} />
            </div>
        )
    }
}

export default RaceLiterContainer;