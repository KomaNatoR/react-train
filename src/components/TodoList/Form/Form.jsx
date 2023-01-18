import React, { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        tag: '',
    };

    
    hendleChange = e => {
        console.dir(e.currentTarget.value);

        const { name, value } = e.currentTarget;
        // const stateKey = e.currentTarget.name;
        // const stateValue = e.currentTarget.value; -- !аналог того конста шо вище!

        this.setState({[name]:value,});
    };
        
    hendleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({name: '', tag: '',});  
    };

    render() {
        return (
            <form onSubmit={this.hendleSubmit}>
                <label>
                    Name
                        <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.hendleChange}
                        />
                </label>

                <label>
                    NikName
                        <input
                        type="text"
                        name="tag"
                        value={this.state.tag}
                        onChange={this.hendleChange}
                        />
                </label>

                <button type="submit">Send</button>
            </form>
        );
    };
};
export default Form;