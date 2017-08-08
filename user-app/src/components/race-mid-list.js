import React from "react";

import RaceMidContainer from "../containers/race-mid-container";


class RaceMidList extends React.Component {
    genRaceMids() {
        return this.props.raceMids.map((bike, index) => {
            return <RaceMidContainer key={bike.model + index} bike={bike} />
        })
    }
    render() {
        return (
            <div>
                {this.genRaceMids()}
            </div>
        )
    }
}

export default RaceMidList;