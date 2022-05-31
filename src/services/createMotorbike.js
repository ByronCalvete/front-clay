import axios from 'axios';

export const createMotorbike = ({
	name,
	date,
	active,
	phone,
	price,
	role,
	licensePlate,
}) => {
	return axios
		.post('https://api-clay.herokuapp.com/api/motorbikes', {
			name,
			date,
			active,
			phone,
			price,
			role,
			licensePlate,
		})
		.then((response) => {
			const { data } = response;
			return data;
		});
};
