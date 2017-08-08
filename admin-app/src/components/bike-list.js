import React from "react";

import BikeContainer from "../containers/bike-container";


class BikeList extends React.Component {
    genBikes() {
        return this.props.bikes.map((bike, index) => {
            return <BikeContainer handleUpdate={this.props.handleUpdate} handleDelete={this.props.handleDelete}
                                     key={bike.model + index} bike={bike}
                    />
        })
    }
    render() {
        return (
            <div>
                {this.genBikes()}
            </div>
        )
    }
}

export default BikeList;