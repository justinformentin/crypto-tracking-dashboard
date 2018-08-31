import axios from 'axios';

export default function getAllTickers() {
	const request = axios.get(`https://api.coinmarketcap.com/v1/ticker/`);
	return request;
}
