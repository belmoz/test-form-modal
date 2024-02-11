import React, { useState } from "react";
import Form from "./components/common/Form/Form";
import "./App.styles.scss";
import Container from "./components/layout/Container/Container";
import Modal from "./components/common/Modal/Modal";

const App = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
		setModalIsOpen(true);
	};

	return (
		<>
			<Container classname={"form"}>
				<Form />
			</Container>
			<Container classname={"modal"}>
				<button className='open-modal-btn' onClick={handleOpenModal}>
					Показать результат
				</button>
				<Modal isOpen={modalIsOpen}>text</Modal>
			</Container>
		</>
	);
};

export default App;
