import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import "./Modal.styles.scss";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	const [showModal, setShowModal] = useState("");

	const modalRef = useRef(null);
	useOnClickOutside(modalRef, onClose);

	useEffect(() => {
		setShowModal("showed");
		addEventListener("keyup", onClose);

		return () => removeEventListener("keyup", onClose);
	}, [onClose]);

	return ReactDOM.createPortal(
		<div className={`modal-overlay ${showModal}`}>
			<div ref={modalRef} className='modal'>
				<button className='modal__close' onClick={onClose}></button>
				<div className='modal__content'>{children}</div>
			</div>
		</div>,
		document.body
	);
};

export default Modal;
