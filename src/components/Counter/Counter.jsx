import React from "react";

import Controls from "./Compons/Controls";
import Value from "./Compons/Value";


class Counter extends React.Component {
    static defaultProps = {
        initialValue:10,
    };

    state = {
        value: this.props.initialValue,
    };

    hendleIncrement = () => {
        console.log('click to increase');
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };
    hendleDecrement = () => {
        console.log('click to decrease');
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        return (
            <div>
                <Value value={this.state.value} />

                <Controls onIncrement={this.hendleIncrement} onDecrement={this.hendleDecrement} />
            </div>
        );
    }
};
export default Counter;