import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div>
                <div className="create-inputs">
                    <input onChange={(event) => {
                    this.props.handleChange("pic", event);
                    }} value={this.props.input.pic} placeholder="pic url" />
                    <input onChange={(event) => {
                    this.props.handleChange("make", event);
                    }} value={this.props.input.make} placeholder="make" />
                    <br/>

                    <input onChange={(event) => {
                    this.props.handleChange("model", event);
                    }} value={this.props.input.model} placeholder="model" />
                    <input onChange={(event) => {
                    this.props.handleChange("msrp", event);
                    }} value={this.props.input.msrp} placeholder="msrp" />
                    <br/>

                    <input onChange={(event) => {
                    this.props.handleChange("cc", event);
                    }} value={this.props.input.cc} placeholder="size" />
                    <input onChange={(event) => {
                    this.props.handleChange("engine", event);
                    }} value={this.props.input.engine} placeholder="engine type" />
                    <br/>

                    <input onChange={(event) => {
                    this.props.handleChange("link", event);
                    }} value={this.props.input.link} placeholder="link url" />
                    <input onChange={(event) => {
                    this.props.handleChange("category", event);
                    }} value={this.props.input.category} placeholder="category" />
                </div>
                <button className="create" onClick={() => {
                    this.props.handleClick(this.props.input);
                }}>Create</button>
            </div>
        )
    }
}

export default Form;