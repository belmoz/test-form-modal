import React, { useState } from "react";
import Form from "./components/common/Form/Form";
import "./App.styles.scss";
import Container from "./components/layout/Container/Container";
import Modal from "./components/common/Modal/Modal";
import ModalBlock from "./components/common/Modal/ModalBlock";

const App = () => {
	return (
		<>
			<Container classname={"form"}>
				<Form />
			</Container>
			<Container classname={"modal"}>
				<ModalBlock />
			</Container>
		</>
	);
};

export default App;
