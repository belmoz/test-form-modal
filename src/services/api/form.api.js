const BASE_URL = "http://localhost:9090";

export const submitForm = async (formData) => {
	return fetch(`${BASE_URL}/api/registration`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	}).then((response) => response.json());
};
