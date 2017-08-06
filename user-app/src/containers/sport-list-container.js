import React from "react";

import { connect } from "react-redux";
import * as actionCreators from "../actions/";
import SportList from "../components/sport-list";


class SportListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                SportListContainer Working
                <SportList sports={this.props.sports} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SportListContainer);