import React from "react";

const FormItemLayout = ({ label, itemName, formValidatorItem, children }) => {
	return (
		<div className='form__item'>
			<label className={`form__label form__label--${itemName}`}>{label}</label>
			{children}
			<span className='form__error'>{formValidatorItem?.message}</span>
		</div>
	);
};

export default FormItemLayout;
