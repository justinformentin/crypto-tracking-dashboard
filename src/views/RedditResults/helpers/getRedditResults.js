import axios from 'axios';

export default function getRedditResults(cryptoName) {
	const request = axios.get(`https://www.reddit.com/search.json?q=${cryptoName}&sort=top&t=day`);

	return request;
}
