import React, { Component } from "react";
import { createPortal } from "react-dom";

import { Div } from "./modal.styled";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

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
        if (e.currentTarget === e.target) onClose();
    };
    hendleBntClick = () => this.props.onClose();


    render() {
        // const { onClose } = this.props;

        return createPortal(
            <Div onClick={this.hendleBackdropClick}>
                <div>
                    <IconButton type="button" onClick={this.hendleBntClick}>
                        <CloseIcon width="18" height="18" />
                    </IconButton>
                    {this.props.children}
                </div>
            </Div>,
            modalRoot,
        );
    }
};