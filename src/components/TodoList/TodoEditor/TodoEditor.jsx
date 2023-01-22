import React, { Component } from "react";

class TodoEditor extends Component {
    state = {
        message:'',
    }

    hendleChange = (e) => {
        this.setState({ message: e.currentTarget.value });
        
    };

    hendleSubmit = e => {
        e.preventDefault(); 

        this.props.onSubmit(this.state.message);

        this.setState({ message: "" });
    };

    render() {

        return (
            <form onSubmit={this.hendleSubmit}>
                <input value={this.state.message} onChange={this.hendleChange} ></input>
                <button type="submit">Add</button>
            </form>
        );
    };
};
export default TodoEditor;