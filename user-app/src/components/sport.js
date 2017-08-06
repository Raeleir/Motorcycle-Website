import React from "react";


class Sport extends React.Component {
    render() {
        return (
            <div>
                Sport Working
                {this.props.sport.model}
            </div>
        )
    }
}

export default Sport;