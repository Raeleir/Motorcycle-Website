import React from "react";

import Sport from "../components/sport";


class SportContainer extends React.Component {
    render() {
        return (
            <div>
                <Sport sport={this.props.sport} />
            </div>
        )
    }
}

export default SportContainer;