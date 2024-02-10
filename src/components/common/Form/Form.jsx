import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./Form.styles.scss";
import { FORM_FIELDS } from "../../../utils/constants/form.constants";

export const initialForm = {
	[FORM_FIELDS.username]: "",
	[FORM_FIELDS.email]: "",
	[FORM_FIELDS.phone]: "",
	[FORM_FIELDS.message]: "",
};

const Form = () => {
	const [formData, setFormData] = useState(initialForm);

	const handleSubmit = () => {
		console.log(formData);
		setFormData(initialForm);
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
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<h2 className='form__title'>Отправь и работай в ITProfit</h2>
			<div className='form__item'>
				<label className='form__label form__label--username'>Имя</label>
				<input
					className='form__input'
					type='text'
					name={FORM_FIELDS.username}
					placeholder=''
					onKeyUp={handleOnKeyEnter}
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.username]}
				/>
			</div>
			<div className='form__item'>
				<label className='form__label form__label--email'>E-mail</label>
				<input
					className='form__input'
					type='email'
					name={FORM_FIELDS.email}
					placeholder=''
					onKeyUp={handleOnKeyEnter}
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.email]}
				/>
			</div>
			<div className='form__item'>
				<label className='form__label form__label--phone'>Телефон</label>
				<InputMask
					className='form__input'
					mask='+375 (2\9) 999-99-99'
					type='tel'
					name={FORM_FIELDS.phone}
					placeholder=''
					onKeyUp={handleOnKeyEnter}
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.phone]}
				/>
			</div>
			<div className='form__item'>
				<label className='form__label form__label--message'>Сообщение</label>
				<textarea
					className='form__input form__input--textarea'
					name={FORM_FIELDS.message}
					placeholder=''
					onChange={handleOnChange}
					value={formData[FORM_FIELDS.message]}
				></textarea>
			</div>
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
