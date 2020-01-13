import axios from 'axios';

export default axios.create({
	baseURL: 'https://developers.zomato.com/api/v2.1',
	headers : {
		'user-key': '8b2e7cdf5a99a68c0cd455fbb7b5d5c8'
	}
}); 