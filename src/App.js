import React from "react";
import Form from "./components/common/Form/Form";
import "./App.styles.scss";
import Container from "./components/layout/Container/Container";

const App = () => {
	return (
		<>
			<Container classname={"form"}>
				<Form />
			</Container>
		</>
	);
};

export default App;
