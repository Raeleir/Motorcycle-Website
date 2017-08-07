import React from "react";

import { Link } from "react-router-dom";


class EncyclopediaHome extends React.Component {
    render() {
        return (
            <div>
                <p>blah blah heading intro blah blah</p>
                <h1>SPORTS</h1>
                <Link to="/race">Race</Link>
                <p>Naked</p>
                <p>Commuter</p>
                <h1>CLASSICS</h1>
                <p>Cruiser</p>
                <p>Standard</p>
                <p>Touring</p>
            </div>
        )
    }
}

export default EncyclopediaHome;