import React, { Component } from "react";

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggleVisibility = () => this.setState(prevState=>({visible: !prevState.visible}));

    render() {
        return (
            <div>
                <button onClick={this.toggleVisibility}>{this.state.visible?"Hide":"Vis"}</button>

                {this.state.visible && <div style={{backgroundColor: "green", width: 100, height: 50,}}>Menu</div>}
            </div>
        );
    }
};
export default Dropdown;