import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const ModalBlock = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
		setModalIsOpen(true);
	};
	const handleClose = () => {
		setModalIsOpen(false);
	};

	return (
		<>
			<button className='open-modal-btn' onClick={handleOpenModal}>
				Открыть модальное окно
			</button>
			<Modal isOpen={modalIsOpen} onClose={handleClose}>
				<p>
					Счастье — это не нечто готовое. <br />
					Счастье зависит только от ваших действий.
				</p>
			</Modal>
		</>
	);
};

export default ModalBlock;
