import React, { Component } from "react";
import { createPortal } from "react-dom";

import { Div } from "./modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeydown);
    };
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeydown);
    };

    hendleKeydown=(e)=>{
        const { onClose } = this.props;
        if (e.code === 'Escape') onClose();
    };
    hendleBackdropClick = e => {
        const { onClose } = this.props;
        if (e.currentTarget===e.target) onClose();
    };
    hendleBntClick=()=> this.props.onClose();


    render() {
        // const { onClose } = this.props;

        return createPortal(
            <Div onClick={this.hendleBackdropClick}>
                <div>
                    <button type="button" onClick={this.hendleBntClick}>X</button>
                    {this.props.children}
                </div>
            </Div>,
            modalRoot,
        );
    }
};