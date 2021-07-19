import { Fragment } from 'react';
import ReactDom from 'react-dom';
import './Modal.css'


const ModalOverlay = props => {
    return (
        <div className="modal">
            <div>{props.children}</div>
        </div>
    );
};

const Backdrop = props => {
    return <div className="backdrop"/>
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return (
        <Fragment>
            { ReactDom.createPortal(<Backdrop/>, portalElement) }
            { ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement) }
        </Fragment>
    );
};

export default Modal;
