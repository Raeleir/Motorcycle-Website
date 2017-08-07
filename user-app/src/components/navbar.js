import React from "react";

import { Link } from "react-router-dom";


class CustomNavbar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/sports">Sports</Link>
            </div>
        )
    }
}

export default CustomNavbar;