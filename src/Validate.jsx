const validateRules = {
	required: (value) => Boolean(value.trim()),
	minLength: (value, params) => value.length > params,
	match: (value, params) => value === params,
};

export const validate = (data, config) => {
	const errors = {};
	for (const value in data) {
		const rules = config[value];
		for (const rule in rules) {
			const { message, params } = rules[rule];
			const validator = validateRules[rule];
			const hasError = validator && !validator(data[value], params);

			if (hasError) {
				errors[value] = message;
				break;
			}
		}
	}
	return errors;
};
