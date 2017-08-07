import React from "react";

import { connect } from "react-redux";
import * as actionCreators from "../actions/";
import RaceMidList from "../components/race-mid-list";
import RaceLiterList from "../components/race-liter-list";


class SportListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <h1>Race Replicas</h1>
                <h2>Middleweights</h2>
                <RaceMidList raceMids={this.props.bikes.filter((bike) => {
                    return bike.category === "race mid";
                })}/>
                <h2>Literbikes</h2>
                <RaceLiterList raceLiters={this.props.bikes.filter((bike) => {
                    return bike.category === "race liter";
                })} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SportListContainer);