import React from "react";

import SportContainer from "../containers/sport-container";


class SportList extends React.Component {
    genSport() {
        return this.props.sports.map((sport, index) => {
            return <SportContainer key={sport.model + index} sport={sport} />
        })
    }
    render() {
        return (
            <div>
                {this.genSport()}
            </div>
        )
    }
}

export default SportList;