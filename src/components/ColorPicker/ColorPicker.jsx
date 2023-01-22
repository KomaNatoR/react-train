import React, { Component } from "react";

class ColorPicker extends Component {
    state = {
        activeOptionIdx:0,
    };

    makeStyleScaled = (index) => {
        const styleScaled = index === this.state.activeOptionIdx ? 1.5 : 1;
        console.log(styleScaled);

        return styleScaled;
    };

    setActiveIdx = (index) => {
        this.setState({ activeOptionIdx: index });
    };

    render() {
        const {option } =this.props;
        const {activeOptionIdx } =this.state;

        const { label } = option[activeOptionIdx];

        return (
            <div>
                <h2>Color Picker</h2>
                <p>Chosed color: {label}</p>

                <div>
                    {option.map(({ label, color }, index) => (
                        <p
                            key={label}
                            style={{
                                backgroundColor: color,
                                width: 50, height: 50,
                                scale:index === activeOptionIdx ? "1.5" : "1",
                            }}
                            onClick={()=>this.setActiveIdx(index)}
                        ></p>
                    ))}
                </div>
            </div>
        );
    }
};
export default ColorPicker;