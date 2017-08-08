import React from "react";

import { Link } from "react-router-dom";
import CustomNavbar from "./navbar";



class Encyclopedia extends React.Component {
    render() {
        return (
            <div>
                <CustomNavbar/>
                <p>blah blah heading intro blah blah</p>
                <h1>SPORTS</h1>
                <Link to="/encyclopedia/race">Race</Link>
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

export default Encyclopedia;