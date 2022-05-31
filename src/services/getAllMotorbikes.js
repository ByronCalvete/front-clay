import axios from 'axios';

export const getAllMotorbikes = () => {
	return axios
		.get('https://api-clay.herokuapp.com/api/motorbikes')
		.then((response) => {
			const { data } = response;
			return data;
		});
};
