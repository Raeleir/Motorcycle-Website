import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions/";
import Form from "../components/form";


class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            pic: "",
            make: "",
            model: "",
            msrp: 0,
            cc: 0,
            engine: "",
            link: "",
            category: ""
        };
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Form input={this.state} handleClick={this.props.addData} handleChange={this.handleChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(FormContainer);