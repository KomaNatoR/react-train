import React, { Component } from "react";
import { createPortal } from "react-dom";

import { Div } from "./modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', e => {
            console.log(e.code);
            if (e.code === 'Escape') {
                console.log('closing modal!');
                console.log(this.props);
                this.props.onClose();
            }
        });
    };

    render() {
        return createPortal(
            <Div>
                <div>{this.props.children}</div>
            </Div>,
            modalRoot,
        );
    }
};