import React, { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'jun',
        licence:false,
    };

    
    hendleChange = e => {
        console.dir(e.currentTarget.value);

        const { name, value } = e.currentTarget;
        // const stateKey = e.currentTarget.name;
        // const stateValue = e.currentTarget.value; -- !аналог того конста шо вище!

        this.setState({ [name]: value, });
    };

    hendleLicenseChange = e => {
        console.log(e.target.checked);

        this.setState({licence:e.target.checked})
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

                <label><br/>
                    NikName
                        <input
                        type="text"
                        name="tag"
                        value={this.state.tag}
                        onChange={this.hendleChange}
                        />
                </label>

                <p>Your level:</p>
                <label> Junior
                    <input type="radio" name="experience" value="jun" onChange={this.hendleChange} checked={this.state.experience === "jun"}/>
                </label>
                <label> Middle
                    <input type="radio" name="experience" value="mid" onChange={this.hendleChange} checked={this.state.experience === "mid"}/>
                </label>
                <label> Senior
                    <input type="radio" name="experience" value="sen" onChange={this.hendleChange} checked={this.state.experience === "sen"}/>
                </label><br />
                
                <label>
                    <input type="checkbox" name="licence" onChange={this.hendleLicenseChange} checked={this.state.licence} /> Agree
                </label><br />

                <button type="submit" disabled={!this.state.licence}>Send</button>
            </form>
        );
    };
};
export default Form;