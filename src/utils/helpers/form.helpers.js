import { FORM_FIELDS, PHONE_MASK } from "../constants/form.constants";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const formValidator = (formData) => {
	let validationObject = {};
	let allValid = true;

	for (const key in formData) {
		const value = formData[key];
		if (!value || (key === FORM_FIELDS.phone && value.length < PHONE_MASK.length - 1)) {
			validationObject[key] = { valid: false, message: "Поле должно быть заполнено!" };
			allValid = false;
			console.log(validationObject[key], key === FORM_FIELDS.phone && value.length < PHONE_MASK.length - 1);
		} else if (key === FORM_FIELDS.email && !emailRegex.test(value)) {
			validationObject[key] = { valid: false, message: "E-mail должен быть заполнен правильно!" };
			allValid = false;
		} else {
			validationObject[key] = { valid: true, message: "" };
		}
	}
	console.log(validationObject);

	return { validationObject, allValid };
};
