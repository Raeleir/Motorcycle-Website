import React from "react";

import RaceLiterContainer from "../containers/race-liter-container";


class RaceLiterList extends React.Component {
    genraceLiters() {
        return this.props.raceLiters.map((bike, index) => {
            return <RaceLiterContainer key={bike.model + index} bike={bike} />
        })
    }
    render() {
        return (
            <div>
                {this.genraceLiters()}
            </div>
        )
    }
}

export default RaceLiterList;