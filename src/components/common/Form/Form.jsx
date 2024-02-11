import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./Form.styles.scss";
import { FORM_FIELDS, PHONE_MASK } from "../../../utils/constants/form.constants";
import { formValidator } from "../../../utils/helpers/form.helpers";
import FormItemLayout from "./FormItemLayout";
import { submitForm } from "../../../services/api/form.api";

export const initialForm = {
	[FORM_FIELDS.username]: "",
	[FORM_FIELDS.email]: "",
	[FORM_FIELDS.phone]: "",
	[FORM_FIELDS.message]: "",
};

const Form = () => {
	const [formData, setFormData] = useState(initialForm);
	const [formValidatorData, setFormValidatorData] = useState({});
	const [response, setResponse] = useState({});
	const [loader, setLoader] = useState(false);

	const handleSubmit = async () => {
		const { validationObject, allValid } = formValidator(formData);
		if (!allValid) {
			setFormValidatorData(validationObject);
			return false;
		}
		setLoader(true);
		await submitForm(formData).then((data) => {
			if (data.status === "success") {
				setFormData(initialForm);
			}
			setResponse(data);
		});
		setLoader(false);
	};

	const handleOnKeyEnter = (event) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	const handleOnChange = (event) => {
		const { value, name } = event.target;
		if (name in FORM_FIELDS) {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
			if (formValidatorData[name]?.message.length !== 0) {
				setFormValidatorData((prev) => ({
					...prev,
					[name]: {
						// ...prev[name],
						valid: true,
						message: "",
					},
				}));
			}
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<h2 className='form__title'>Отправь и работай в ITProfit</h2>
			<FormItemLayout
				label={"Имя"}
				itemName={FORM_FIELDS.username}
				formValidatorItem={formValidatorData[FORM_FIELDS.username]}
			>
				<input
					className={`form__input ${
						formValidatorData[FORM_FIELDS.username]?.valid === false && "invalid-field"
					}`}
					type='text'
					name={FORM_FIELDS.username}
					placeholder=''
					onKeyUp={handleOnKeyEnter}
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.username]}
				/>
			</FormItemLayout>
			<FormItemLayout
				label={"E-mail"}
				itemName={FORM_FIELDS.email}
				formValidatorItem={formValidatorData[FORM_FIELDS.email]}
			>
				<input
					className={`form__input ${
						formValidatorData[FORM_FIELDS.email]?.valid === false && "invalid-field"
					}`}
					type='email'
					name={FORM_FIELDS.email}
					placeholder=''
					onKeyUp={handleOnKeyEnter}
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.email]}
				/>
			</FormItemLayout>
			<FormItemLayout
				label={"Телефон"}
				itemName={FORM_FIELDS.phone}
				formValidatorItem={formValidatorData[FORM_FIELDS.phone]}
			>
				<InputMask
					className={`form__input ${
						formValidatorData[FORM_FIELDS.phone]?.valid === false && "invalid-field"
					}`}
					mask={PHONE_MASK}
					maskChar={null}
					type='tel'
					name={FORM_FIELDS.phone}
					placeholder=''
					onKeyUp={handleOnKeyEnter}
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.phone]}
				/>
			</FormItemLayout>
			<FormItemLayout
				label={"Сообщение"}
				itemName={FORM_FIELDS.message}
				formValidatorItem={formValidatorData[FORM_FIELDS.message]}
			>
				<textarea
					className={`form__input form__input--textarea ${
						formValidatorData[FORM_FIELDS.message]?.valid === false ? "invalid-field" : ""
					}`}
					name={FORM_FIELDS.message}
					placeholder=''
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.message]}
				></textarea>
			</FormItemLayout>
			{!loader && <span className={`form__advice advice-${response.status}`}>{response.message}</span>}
			{loader && <span className={`form__advice`}>Форма отправляется...</span>}
			<button
				className='form__btn btn'
				type='submit'
				onClick={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				Отправить
			</button>
		</form>
	);
};

export default Form;
